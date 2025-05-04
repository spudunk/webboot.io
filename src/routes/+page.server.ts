import { fail, error as kitError } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { z } from 'zod';
import type { ContactFormData } from '$lib/types';
import { EmailService } from '$lib/server/email';

const contactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	tel: z.string().optional(),
	business: z.string().optional(),
	website: z.string().url('Invalid website URL').optional().or(z.literal(''))
});

export const load: PageServerLoad = async () => {
	return {};
};

export const actions = {
	contact: async ({ request, getClientAddress, locals }) => {
		const ip = getClientAddress();

		// Check rate limit
		const allowed = await locals.db.checkRateLimit(ip);
		if (!allowed) {
			return fail(429, {
				message: 'Too many submissions. Please try again later.',
				values: {}
			});
		}

		// Process and validate form
		const formData = await request.formData();
		const data = Object.fromEntries(formData) as ContactFormData;
		const result = contactSchema.safeParse(data);

		if (!result.success) {
			return fail(400, {
				errors: result.error.flatten().fieldErrors,
				message: 'Please check your input and try again.',
				values: data
			});
		}

		// Store in D1
		try {
			const submissionId = await locals.db.createSubmission({
				name: result.data.name,
				email: result.data.email,
				phone: result.data.tel,
				company: result.data.business,
				message: `Website: ${result.data.website || 'Not provided'}\nIP: ${ip}`
			});

			// Send emails
			const emailResult = await EmailService.sendFormSubmissionEmails({
				...result.data,
				ip,
				submissionId
			});

			if (!emailResult.userEmail.ok || !emailResult.adminEmail.ok) {
				throw kitError(500, 'Failed to send email');
			}

			return { message: "Thanks for reaching out! I'll be in touch soon." };
		} catch (err) {
			console.error('Form submission error:', err);
			return fail(500, {
				message: 'Something went wrong. Please try again later.',
				values: data
			});
		}
	}
} satisfies Actions;
