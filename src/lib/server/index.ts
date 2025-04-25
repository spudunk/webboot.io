// place files you want to import through the `$lib` alias in this folder.
import { DKIMKEY } from '$env/static/private';

/**
 * @typedef {Object} EmailData
 * @property {string} data.to
 * @property {string} data.from
 * @property {string} data.subject
 * @property {string} data.textBody
 * @returns
 */

/**
 *
 * @param {EmailData} data
 * @returns
 */
export const sendEmail = (data: {
	to: string;
	from: string;
	subject: string;
	textBody: string;
}) => {
	return fetch('https://api.mailchannels.net/tx/v1/send', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-Api-Key': 'hwnNwz6WfLjrr2szoVqxfp8v3Tcj90ry'
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
};
