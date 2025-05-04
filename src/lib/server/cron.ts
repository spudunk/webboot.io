import { Database } from './db';
import { EmailService } from '$lib/server/email';

export async function handleFollowUps(db: Database) {
	// Get submissions that need follow-up (no follow-up in last 3 days)
	const submissions = await db.getSubmissionsNeedingFollowUp(3);

	for (const submission of submissions) {
		try {
			if (!submission.id) continue;

			const emailResult = await EmailService.sendFollowUpEmail({
				id: submission.id,
				name: submission.name,
				email: submission.email
			});

			if (emailResult.ok) {
				// Record the follow-up
				await db.recordFollowUp(submission.id, 'first_follow_up');
			}
		} catch (error) {
			console.error(`Failed to send follow-up to ${submission.email}:`, error);
		}
	}
}

export default {
	async scheduled(event: ScheduledEvent, env: Env, _ctx: ExecutionContext): Promise<void> {
		const db = new Database(env.DB);
		await handleFollowUps(db);
	}
};
