import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(50),
  description: z.string().min(1).max(200),
  icon: z.enum(['Code', 'Smartphone', 'Workflow', 'Lightbulb']),
});

export type Service = z.infer<typeof serviceSchema>;

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(300),
  technologies: z.array(z.string()).min(1),
  link: z.string().url().optional(),
  github: z.string().url().optional(),
});

export type Project = z.infer<typeof projectSchema>;

export const socialLinkSchema = z.object({
  platform: z.enum(['linkedin', 'github']),
  url: z.string().url(),
  label: z.string(),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;

export const personalInfoSchema = z.object({
  name: z.string().min(1).max(100),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(300),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{6,14}$/),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;

export const personalInfo = {
  name: 'Carlos Durán',
  title: 'Desarrollador de Software',
  description: 'Desarrollo software a medida que transforma ideas en soluciones digitales.',
  email: 'carlos@duran.com',
  phone: '+5491166666666',
} as const satisfies PersonalInfo;

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    description: 'Sitios y aplicaciones web modernos, responsivos y optimizados.',
    icon: 'Code',
  },
  {
    id: 'mobile-dev',
    title: 'Desarrollo Mobile',
    description: 'Apps nativas e híbridas para iOS y Android.',
    icon: 'Smartphone',
  },
  {
    id: 'software-custom',
    title: 'Software a Medida',
    description: 'Soluciones personalizadas para automatizar y optimizar tus procesos.',
    icon: 'Workflow',
  },
  {
    id: 'consulting',
    title: 'Consultoría Tech',
    description: 'Asesoría técnica para proyectos y equipos de desarrollo.',
    icon: 'Lightbulb',
  },
] as const;

export const socialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/carlos-duran',
    label: 'LinkedIn',
  },
  {
    platform: 'github',
    url: 'https://github.com/Ceduran1692',
    label: 'GitHub',
  },
] as const;

export const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'Python',
  'PostgreSQL / MongoDB',
  'Docker',
  'Git',
  'AWS',
] as const;

export type Skill = (typeof skills)[number];

export const stats = [
  { label: 'Proyectos', value: '50+', ariaLabel: 'Más de 50 proyectos completados' },
  { label: 'Clientes', value: '30+', ariaLabel: 'Más de 30 clientes satisfechos' },
  { label: 'Equipos', value: '15+', ariaLabel: 'Más de 15 equipos liderados' },
  { label: 'Años exp.', value: '8+', ariaLabel: 'Más de 8 años de experiencia' },
] as const;

export type Stat = (typeof stats)[number];