import { z } from 'zod';
import type { contactSchema, optInSchema, messageSchema } from './schemas';

// Base form data type
export type BaseFormData = {
	name: string;
	email: string;
};

// Contact form data type
export type ContactFormData = BaseFormData & {
	tel?: string;
	business?: string;
	website?: string;
};

// Message form data type
export type MessageFormData = BaseFormData & {
	tel?: string;
	message: string;
};

// Opt-in form data type
export type OptInFormData = BaseFormData;

// Schema types
export type ContactSchema = z.infer<typeof contactSchema>;
export type OptInSchema = z.infer<typeof optInSchema>;
export type MessageSchema = z.infer<typeof messageSchema>;
