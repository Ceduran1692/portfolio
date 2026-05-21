# Portfolio - Carlos Durán

Sitio web personal profesional desarrollado con Next.js, TypeScript y Tailwind CSS.

## Características

- **Diseño responsivo**: Se adapta a todos los dispositivos
- **Dark theme**: Tema oscuro moderno con glassmorphism
- **Animaciones fluidas**: Scroll reveal, typing effect, hover effects
- **Accesibilidad**: WCAG 2.2, skip links, aria labels, focus states
- **SEO optimizado**: Meta tags, Schema.org, Open Graph
- **Contacto protegido**: Botones wa.me y mailto sin exponer datos
- **Proyectos dinámicos**: Fetch desde GitHub API con ISR
- **Código limpio**: Principios SOLID, clean code, TypeScript strict

## Tecnologías

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict mode)
- Tailwind CSS v4
- Lucide React (iconos SVG inline)
- Zod (validación de datos)
- pnpm

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx      # Layout principal con skip link y Schema.org
│   ├── page.tsx        # Página principal
│   ├── loading.tsx     # Skeleton loading state
│   ├── error.tsx       # Error boundary
│   └── globals.css     # Estilos globales y variables CSS
├── components/
│   ├── Header.tsx      # Navegación con glassmorphism
│   ├── Hero.tsx        # Sección principal con typing effect
│   ├── About.tsx       # Sobre mí con estadísticas
│   ├── Services.tsx    # Servicios ofrecidos
│   ├── Projects.tsx    # Grid de proyectos desde GitHub
│   ├── ProjectsSection.tsx  # Server component para fetch
│   ├── Contact.tsx     # Sección de contacto
│   ├── Footer.tsx      # Pie de página
│   └── Icons.tsx       # SVG icons inline
├── data/
│   └── portfolio.ts    # Datos configurables + Zod schemas
├── hooks/
│   ├── useScrollReveal.ts   # IntersectionObserver hook
│   └── useTypingEffect.ts    # Typing animation hook
└── lib/
    └── github.ts       # GitHub API utilities
```

## Datos del Portfolio - COMPLETAR

Para que el sitio funcione correctamente, necesitas editar el archivo:

### `src/data/portfolio.ts`

#### 1. Información Personal (`personalInfo`)

```typescript
export const personalInfo = {
  name: 'TU_NOMBRE_COMPLETO',           // Ej: 'Carlos Durán'
  title: 'TU_TITULO_PROFESIONAL',       // Ej: 'Desarrollador de Software'
  description: 'TU_DESCRIPCION',        // Breve descripción de tus servicios
  email: 'TU_EMAIL@ejemplo.com',        // Email para contacto (se usa en mailto:)
  phone: '+549XXXXXXXXXX',             // Número con código de país (se usa en wa.me:)
};
```

**IMPORTANTE:** 
- El email y teléfono NUNCA se muestran en el HTML, solo se usan en los botones de contacto
- Formato teléfono: `+` + código país + número (ej: `+5491166666666` para Argentina)

#### 2. Links de Redes Sociales (`socialLinks`)

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/TU_USUARIO',
    label: 'LinkedIn',
  },
  {
    platform: 'github',
    url: 'https://github.com/TU_USUARIO',
    label: 'GitHub',
  },
];
```

#### 3. Servicios (`services`) - Opcional

```typescript
export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    description: 'Descripción del servicio',
    icon: 'Code',  // Options: Code, Smartphone, Workflow, Lightbulb
  },
  // ... más servicios
];
```

#### 4. Skills (`skills`) - Opcional

```typescript
export const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  // ... tus habilidades técnicas
] as const;
```

#### 5. Estadísticas (`stats`) - Opcional

```typescript
export const stats = [
  { label: 'Proyectos', value: '50+', ariaLabel: 'Más de 50 proyectos completados' },
  // ... tus estadísticas
] as const;
```

### `src/app/layout.tsx`

Edita la URL del sitio en:

```typescript
const websiteUrl = 'https://TU_DOMINIO.com';
```

Y el Schema.org:

```typescript
const schemaOrgData = {
  '@type': 'Person',
  name: 'TU_NOMBRE',
  jobTitle: 'TU_TITULO',
  url: 'https://TU_DOMINIO.com',
  sameAs: [
    'https://linkedin.com/in/TU_USUARIO',
    'https://github.com/TU_USUARIO',
  ],
  // ...
};
```

### `src/components/About.tsx`

Edita el texto sobre ti en las etiquetas `<p>`.

### GitHub Username

El nombre de usuario de GitHub (`Ceduran1692`) está configurado en:
- `src/components/ProjectsSection.tsx` (línea 5)
- `src/lib/github.ts`

Para cambiarlo, actualiza ambos archivos.

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Iniciar en modo producción
pnpm start

# Verificar tipos TypeScript
pnpm typecheck

# Linting
pnpm lint
```

## Despliegue

### Vercel (Recomendado)

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Importa el repositorio de GitHub
3. Vercel detectará automáticamente Next.js
4. Click en "Deploy"

### Dominio Personal

1. En Vercel, ve a Settings > Domains
2. Agrega `cduran.com.ar`
3. Crea un registro CNAME en tu proveedor de dominio:
   - Host: `www`
   - Value: `cvercel.com` (proporcionado por Vercel)
   - Tipo: CNAME

## Funcionalidades Futuras

El proyecto está preparado para agregar:

- **Bot de WhatsApp**: Integración con API de WhatsApp Business
- **Medios de pago**: Stripe, MercadoPago (API routes en `app/api/`)
- **Analytics**: Google Analytics, Vercel Analytics
- **CMS**: Integración con Contentful, Sanity o Strapi
- **Blog**: Agregar sección `/blog` con markdown

## Checklist de Configuración

- [ ] Editar `src/data/portfolio.ts` con tus datos reales
- [ ] Editar `src/app/layout.tsx` con tu dominio
- [ ] Actualizar links de LinkedIn y GitHub
- [ ] Verificar que proyectos en GitHub sean públicos
- [ ] Configurar dominio en Vercel
- [ ] Probar botones de contacto (WhatsApp y Email)

## Licencia

MIT License