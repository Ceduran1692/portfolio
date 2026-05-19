export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'github';
  url: string;
  label: string;
}

export const personalInfo = {
  name: 'Carlos Durán',
  title: 'Desarrollador de Software',
  description: 'Desarrollo software a medida que transforma ideas en soluciones digitales.',
  email: 'carlos@duran.com',
  phone: '+5491166666666',
};

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
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'Plataforma de ventas online con panel de administración.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    link: 'https://example.com',
  },
  {
    id: 'project-2',
    title: 'CRM Dashboard',
    description: 'Sistema de gestión de clientes con análisis en tiempo real.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: 'https://example.com',
  },
  {
    id: 'project-3',
    title: 'Task Manager API',
    description: 'API REST para gestión de tareas con autenticación JWT.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'Docker'],
    github: 'https://github.com/example',
  },
];

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
];