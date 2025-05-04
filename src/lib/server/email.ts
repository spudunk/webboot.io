import { DKIMKEY, MCAPIKEY } from '$env/static/private';

// Validate environment variables
if (!DKIMKEY || !MCAPIKEY) {
	throw new Error('Missing required environment variables for email configuration');
}

// Types
interface EmailOptions {
	to: string;
	from: string;
	subject: string;
	textBody: string;
}

interface FormSubmissionData {
	name: string;
	email: string;
	tel?: string;
	business?: string;
	website?: string;
	ip: string;
	submissionId: number;
}

interface FollowUpData {
	id: number;
	name: string;
	email: string;
}

export class EmailService {
	// Core email sending functionality
	private static async sendMail({ to, from, subject, textBody }: EmailOptions) {
		try {
			const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'X-Api-Key': MCAPIKEY
				},
				body: JSON.stringify({
					personalizations: [
						{
							to: [{ email: to }],
							dkim_domain: 'webboot.io',
							dkim_selector: 'mailchannels',
							dkim_private_key: DKIMKEY
						}
					],
					from: { email: from },
					subject,
					content: [
						{
							type: 'text/plain',
							value: textBody
						}
					]
				})
			});

			if (!response.ok) {
				const error = await response.text();
				console.error('Error sending email:', error);
				return { ok: false, error };
			}

			return { ok: true };
		} catch (error) {
			console.error('Failed to send email:', error);
			return { ok: false, error };
		}
	}

	// Form submission emails
	static async sendFormSubmissionEmails(submission: FormSubmissionData) {
		const { name, email, tel, business, website, ip, submissionId } = submission;

		// Send confirmation to user
		const userEmail = await this.sendMail({
			to: email,
			from: 'chris@webboot.io',
			subject: 'Thanks for contacting webboot.io!',
			textBody: `Hi ${name}, I'll reach out within a few days to discuss your project. If you need immediate assistance please call my cell.\n\nChristopher Hicks\n(360) 827-2736\nchris@webboot.io`
		});

		// Send notification to admin
		const adminEmail = await this.sendMail({
			to: 'chris@webboot.io',
			from: 'forms@webboot.io',
			subject: `New submission${business ? ` from ${business}` : ''}`,
			textBody: `email: ${email}\nname: ${name}\ntel: ${tel}\nbusiness: ${business}\nwebsite: ${website}\nIP: ${ip}\nSubmission ID: ${submissionId}`
		});

		return { userEmail, adminEmail };
	}

	// Follow-up emails
	static async sendFollowUpEmail(submission: FollowUpData) {
		// Send follow-up to user
		const followUpEmail = await this.sendMail({
			to: submission.email,
			from: 'chris@webboot.io',
			subject: 'Following up on your inquiry',
			textBody: `Hi ${submission.name},\n\nI wanted to follow up on your recent inquiry. Is there anything specific you'd like to discuss about your project?\n\nBest regards,\nChristopher Hicks\n(360) 827-2736\nchris@webboot.io`
		});

		if (followUpEmail.ok) {
			// Send notification to admin
			await this.sendMail({
				to: 'chris@webboot.io',
				from: 'chris@webboot.io',
				subject: `Follow-up sent to ${submission.name}`,
				textBody: `A follow-up email was sent to ${submission.name} (${submission.email})`
			});
		}

		return followUpEmail;
	}
}
