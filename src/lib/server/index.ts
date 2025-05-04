// place files you want to import through the `$lib` alias in this folder.
import { DKIMKEY, MCAPIKEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

// Validate environment variables
if (!DKIMKEY || !MCAPIKEY) {
	throw new Error('Missing required environment variables for email configuration');
}

/**
 * Sends an email using MailChannels API
 * @param data Email data including recipient, sender, subject, and body
 * @returns Promise<Response> The response from the MailChannels API
 */
export const sendEmail = async (data: EmailData): Promise<Response> => {
	const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-Api-Key': MCAPIKEY
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [{ email: data.to, name: '' }],
					dkim_domain: 'webboot.io',
					dkim_selector: 'mailchannels',
					dkim_private_key: DKIMKEY
				}
			],
			from: {
				email: data.from,
				name: ''
			},
			subject: data.subject,
			content: [
				{
					type: 'text/plain',
					value: data.textBody
				}
			]
		})
	});

	if (!response.ok) {
		throw error(response.status, {
			message: `Email failed to send: ${response.statusText}`
		});
	}

	return response;
};
