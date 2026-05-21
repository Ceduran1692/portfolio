import { z } from 'zod';

const envSchema = z.object({
  PERSONAL_NAME: z.string().min(1).max(100),
  PERSONAL_TITLE: z.string().min(1).max(100),
  PERSONAL_DESCRIPTION: z.string().min(1).max(300),
  PERSONAL_EMAIL: z.string().email(),
  PERSONAL_PHONE: z.string().regex(/^\+?[1-9]\d{6,14}$/),
  LINKEDIN_URL: z.string().url(),
  GITHUB_URL: z.string().url(),
  WEBSITE_URL: z.string().url(),
});

const parsed = envSchema.safeParse({
  PERSONAL_NAME: process.env.PERSONAL_NAME,
  PERSONAL_TITLE: process.env.PERSONAL_TITLE,
  PERSONAL_DESCRIPTION: process.env.PERSONAL_DESCRIPTION,
  PERSONAL_EMAIL: process.env.PERSONAL_EMAIL,
  PERSONAL_PHONE: process.env.PERSONAL_PHONE,
  LINKEDIN_URL: process.env.LINKEDIN_URL,
  GITHUB_URL: process.env.GITHUB_URL,
  WEBSITE_URL: process.env.WEBSITE_URL,
});

if (!parsed.success) {
  console.error('❌ Error en variables de entorno:');
  console.error(parsed.error.format());
  throw new Error('Variables de entorno inválidas');
}

export const env = parsed.data;

export const personalInfo = {
  name: env.PERSONAL_NAME,
  title: env.PERSONAL_TITLE,
  description: env.PERSONAL_DESCRIPTION,
  email: env.PERSONAL_EMAIL,
  phone: env.PERSONAL_PHONE,
} as const;

export const socialLinks = [
  {
    platform: 'linkedin' as const,
    url: env.LINKEDIN_URL,
    label: 'LinkedIn',
  },
  {
    platform: 'github' as const,
    url: env.GITHUB_URL,
    label: 'GitHub',
  },
] as const;

export const websiteUrl = env.WEBSITE_URL;