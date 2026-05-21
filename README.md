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
- **Variables de entorno**: Datos sensibles fuera del código fuente

## Tecnologías

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict mode)
- Tailwind CSS v4
- Lucide React (iconos SVG inline)
- Zod (validación de datos y esquemas)
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
│   └── portfolio.ts    # Datos estáticos (servicios, skills, stats)
├── hooks/
│   ├── useScrollReveal.ts   # IntersectionObserver hook
│   └── useTypingEffect.ts    # Typing animation hook
└── lib/
    ├── env.ts          # Variables de entorno validadas con Zod
    └── github.ts       # GitHub API utilities
```

## Configuración - VARIABLES DE ENTORNO

### 1. Copiar archivo de ejemplo

```bash
cp .env.example .env.local
```

### 2. Editar `.env.local` con tus datos

```env
# Información Personal
PERSONAL_NAME=Carlos Durán
PERSONAL_TITLE=Desarrollador de Software
PERSONAL_DESCRIPTION=Desarrollo software a medida que transforma ideas en soluciones digitales.
PERSONAL_EMAIL=tu@email.com
PERSONAL_PHONE=+5491100000000

# Links de Redes Sociales
LINKEDIN_URL=https://linkedin.com/in/tu-usuario
GITHUB_URL=https://github.com/tu-usuario

# Dominio del sitio
WEBSITE_URL=https://tu-dominio.com
```

### 3. Variables disponibles

| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `PERSONAL_NAME` | Tu nombre completo | Sí |
| `PERSONAL_TITLE` | Tu título profesional | Sí |
| `PERSONAL_DESCRIPTION` | Breve descripción de servicios | Sí |
| `PERSONAL_EMAIL` | Email para contacto (mailto:) | Sí |
| `PERSONAL_PHONE` | Teléfono con código país (wa.me:) | Sí |
| `LINKEDIN_URL` | URL de tu perfil de LinkedIn | Sí |
| `GITHUB_URL` | URL de tu perfil de GitHub | Sí |
| `WEBSITE_URL` | URL de tu sitio web | Sí |

**IMPORTANTE:** 
- El email y teléfono NUNCA se muestran en el HTML, solo se usan en los botones de contacto
- Formato teléfono: `+` + código país + número (ej: `+5491166666666` para Argentina)
- `.env.local` está en `.gitignore`, NO se commitea

### 4. En Vercel

Agrega las variables de entorno en:
1. Project Settings → Environment Variables
2. Agrega cada variable con su valor
3. Redeploy para aplicar cambios

## Datos Estáticos (No sensibles)

Los siguientes archivos contienen datos que NO son sensibles y pueden permanecer en el código:

### `src/data/portfolio.ts`

- `services`: Servicios ofrecidos (título, descripción, icono)
- `skills`: Habilidades técnicas
- `stats`: Estadísticas profesionales

### `src/components/About.tsx`

- Texto sobre ti (descripción personal)

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Crear archivo .env.local
cp .env.example .env.local

# Editar .env.local con tus datos
nano .env.local

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
3. En Project Settings → Environment Variables, agrega:
   - `PERSONAL_NAME`
   - `PERSONAL_TITLE`
   - `PERSONAL_DESCRIPTION`
   - `PERSONAL_EMAIL`
   - `PERSONAL_PHONE`
   - `LINKEDIN_URL`
   - `GITHUB_URL`
   - `WEBSITE_URL`
4. Deploy

### Dominio Personal

1. En Vercel, ve a Settings > Domains
2. Agrega `tu-dominio.com`
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

- [ ] Copiar `.env.example` a `.env.local`
- [ ] Completar todas las variables de entorno
- [ ] Configurar variables en Vercel (si despliegas ahí)
- [ ] Verificar que proyectos en GitHub sean públicos
- [ ] Configurar dominio
- [ ] Probar botones de contacto (WhatsApp y Email)

## Licencia

MIT License