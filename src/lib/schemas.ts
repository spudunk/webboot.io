import { z } from 'zod';

// Common field validations
const nameSchema = z.string().min(1, 'Name is required');
const emailSchema = z.string().email('Invalid email address');
const telSchema = z.string().optional();
const businessSchema = z.string().optional();
const websiteSchema = z.string().url('Invalid website URL').optional().or(z.literal(''));

// Contact form schema
export const contactSchema = z.object({
	name: nameSchema,
	email: emailSchema,
	tel: telSchema,
	business: businessSchema,
	website: websiteSchema
});

// Opt-in form schema
export const optInSchema = z.object({
	name: nameSchema,
	email: emailSchema
});

// Message form schema
export const messageSchema = z.object({
	name: nameSchema,
	email: emailSchema,
	tel: telSchema,
	message: z.string().min(1, 'Message is required')
});
