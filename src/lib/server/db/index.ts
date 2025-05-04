import { D1Database } from '@cloudflare/workers-types';

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
	maxRequests: 5, // Maximum requests per time window
	timeWindow: '1 hour' // SQLite interval format
};

export interface Submission {
	id?: number;
	name: string;
	email: string;
	phone?: string;
	company?: string;
	message: string;
	status?: string;
	created_at?: Date;
	updated_at?: Date;
	last_follow_up?: Date;
	follow_up_count?: number;
}

export interface FollowUpEmail {
	id?: number;
	submission_id: number;
	email_type: string;
	sent_at?: Date;
	status?: string;
}

export class Database {
	private db: D1Database;

	constructor(db: D1Database) {
		this.db = db;
	}

	// Expose the prepare method
	prepare(query: string) {
		return this.db.prepare(query);
	}

	// Submission Management
	async createSubmission(submission: Submission): Promise<number> {
		const { name, email, phone, company, message } = submission;
		const result = await this.db
			.prepare(
				'INSERT INTO submissions (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)'
			)
			.bind(name, email, phone, company, message)
			.run();
		return result.meta.last_row_id;
	}

	async getSubmission(id: number): Promise<Submission | null> {
		const result = await this.db.prepare('SELECT * FROM submissions WHERE id = ?').bind(id).first();
		return result as Submission | null;
	}

	async updateSubmissionStatus(id: number, status: string): Promise<void> {
		await this.db
			.prepare('UPDATE submissions SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
			.bind(status, id)
			.run();
	}

	async getSubmissionsNeedingFollowUp(days: number): Promise<Submission[]> {
		const stmt = this.db
			.prepare(
				`
            SELECT * FROM submissions 
            WHERE status = 'new' 
            AND follow_up_count < 3
            AND (last_follow_up IS NULL OR datetime(last_follow_up) < datetime('now', ?))
            ORDER BY created_at ASC
        `
			)
			.bind(`-${days} days`);

		const { results } = await stmt.all();
		return results as unknown as Submission[];
	}

	// Follow-up Management
	async recordFollowUp(submissionId: number, emailType: string): Promise<void> {
		await this.db
			.prepare('INSERT INTO follow_up_emails (submission_id, email_type) VALUES (?, ?)')
			.bind(submissionId, emailType)
			.run();

		await this.db
			.prepare(
				'UPDATE submissions SET last_follow_up = CURRENT_TIMESTAMP, follow_up_count = follow_up_count + 1 WHERE id = ?'
			)
			.bind(submissionId)
			.run();
	}

	async markAsManuallyContacted(submissionId: number): Promise<void> {
		await this.db
			.prepare('UPDATE submissions SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
			.bind('contacted', submissionId)
			.run();
	}

	// Rate Limiting
	async checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
		try {
			// Get count of requests in the time window
			const result = await this.db
				.prepare(
					`
                SELECT COUNT(*) as count 
                FROM rate_limits 
                WHERE ip = ? 
                AND timestamp > datetime('now', ?)
            `
				)
				.bind(ip, `-${RATE_LIMIT_CONFIG.timeWindow}`)
				.first<{ count: number }>();

			const count = result?.count || 0;
			const remaining = Math.max(0, RATE_LIMIT_CONFIG.maxRequests - count);
			const allowed = count < RATE_LIMIT_CONFIG.maxRequests;

			if (allowed) {
				// Insert new rate limit entry
				await this.db
					.prepare(
						`
                    INSERT INTO rate_limits (ip, timestamp) 
                    VALUES (?, datetime('now'))
                `
					)
					.bind(ip)
					.run();
			}

			// Clean up old entries periodically (every 1000 requests)
			if (Math.random() < 0.001) {
				await this.db
					.prepare(
						`
                    DELETE FROM rate_limits 
                    WHERE timestamp < datetime('now', '-24 hours')
                `
					)
					.run();
			}

			return { allowed, remaining };
		} catch (error) {
			console.error('Rate limit check failed:', error);
			// Fail open - allow the request if there's an error
			return { allowed: true, remaining: RATE_LIMIT_CONFIG.maxRequests };
		}
	}
}
