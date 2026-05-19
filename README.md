# Portfolio - Carlos Durán

Sitio web personal profesional desarrollado con Next.js, TypeScript y Tailwind CSS.

## Características

- **Diseño responsivo**: Se adapta a todos los dispositivos
- **Contacto protegido**: Botones que abren WhatsApp y Email sin exponer datos
- **Links a redes**: LinkedIn y GitHub en el footer
- **Estructura escalable**: Preparado para agregar bot y pagos
- **Código limpio**: Principios SOLID y clean code

## Tecnologías

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (iconos)
- pnpm

## Estructura del Proyecto

```
src/
├── app/              # Páginas y layout
├── components/       # Componentes React
│   ├── Header.tsx    # Navegación
│   ├── Hero.tsx      # Sección principal
│   ├── About.tsx     # Sobre mí
│   ├── Services.tsx  # Servicios ofrecidos
│   ├── Projects.tsx  # Portfolio de proyectos
│   ├── Contact.tsx   # Sección de contacto
│   └── Footer.tsx    # Pie de página
├── data/             # Datos configurables del portfolio
└── lib/              # Utilidades (reservado para futuro)
```

## Datos del Portfolio

Para actualizar tu información personal, modifica el archivo:

`src/data/portfolio.ts`

Allí encontrarás:
- `personalInfo`: Nombre, título, email, teléfono
- `services`: Servicios ofrecidos
- `projects`: Proyectos del portfolio
- `socialLinks`: Links a LinkedIn y GitHub

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

## Licencia

MIT License