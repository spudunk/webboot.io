import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
	tel: z.string().optional(),
	business: z.string().optional(),
	website: z.string().optional(),
});

export const optInSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const messageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
	tel: z.string().optional(),
	message: z.string()
});

export type ContactSchema = typeof contactSchema;
export type OptInSchema = typeof optInSchema;
export type MessageSchema = typeof messageSchema;


