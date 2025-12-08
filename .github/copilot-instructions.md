# GitHub Copilot Instructions

## Project Overview

This is a professional, customizable website template for service-based businesses (salons, spas, studios, bakeries, cafes, etc.). The template is built with **Astro** and **Tailwind CSS** to deliver fast, modern, and SEO-friendly static websites.

## Tech Stack

- **Framework**: Astro 5.x (Static Site Generator)
- **Styling**: Tailwind CSS 4.x with custom CSS variables
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite (via Astro)
- **Package Manager**: npm

## Project Structure

```
src/
├── assets/              # Static images and media files
├── components/          # Reusable Astro components
│   ├── Hero.astro      # Hero section component
│   ├── Button.astro    # Button component
│   ├── Card.astro      # Card component
│   ├── Nav.astro       # Navigation component
│   └── ...             # Other UI components
├── data/               # TypeScript configuration files
│   ├── site.ts        # Master site configuration
│   ├── cardGrid.ts    # Card grid configurations
│   ├── menu.ts        # Menu/services data
│   └── ...            # Other data configs
├── layouts/
│   └── Layout.astro   # Base layout with Nav and Footer
├── pages/             # File-based routing (Astro pages)
│   ├── index.astro   # Homepage
│   ├── docs.astro    # Documentation page
│   └── theme.astro   # Theme preview page
└── styles/
    └── global.css    # Global CSS with theme variables
```

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run astro    # Run Astro CLI commands
```

## Coding Standards & Conventions

### File Naming

- **Components**: PascalCase (e.g., `Hero.astro`, `CardGrid.astro`)
- **Data files**: camelCase (e.g., `cardGrid.ts`, `site.ts`)
- **Pages**: lowercase (e.g., `index.astro`, `docs.astro`)

### TypeScript

- Use **strict mode** (configured in `tsconfig.json`)
- Always define interfaces for component props
- Export interfaces for reusable data structures
- Use TypeScript for all data configuration files in `src/data/`

### Component Structure

Astro components follow this structure:

```astro
---
// 1. Imports
import OtherComponent from './OtherComponent.astro';

// 2. Interface definitions
interface Props {
  title: string;
  description?: string;
  variant?: 'default' | 'gradient';
}

// 3. Props destructuring with defaults
const {
  title,
  description = 'Default description',
  variant = 'default',
} = Astro.props;

// 4. Logic and computed values
const classes = variant === 'gradient' ? 'bg-gradient' : 'bg-solid';
---

<!-- 5. Template markup -->
<section class={classes}>
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</section>
```

### Styling Conventions

#### Theme System

- Use **CSS custom properties** defined in `src/styles/global.css`
- Support both **light** and **dark** themes via `data-theme` attribute
- Primary color palette:
  - `primary` - Main brand color
  - `secondary` - Accent color
  - `surface` - Background colors
  - `error`, `success`, `warning` - Status colors

#### Utility Classes

Use Tailwind utility classes defined via custom properties:

- `.primary` - Primary background
- `.secondary` - Secondary background
- `.surface` - Surface background
- `.on-primary`, `.on-secondary`, `.on-surface` - Text on colored backgrounds
- `.border-color` - Theme-aware borders

#### Responsive Design

- Mobile-first approach
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Common spacing: `py-16 md:py-12` for sections
- Container: `max-w-6xl mx-auto px-6 md:px-2`

### Data Configuration Pattern

All site content should be configurable via TypeScript files in `src/data/`:

```typescript
// Define interface
export interface ConfigItem {
  title: string;
  description: string;
  optional?: string;
}

// Export configuration
export const myConfig: ConfigItem = {
  title: "Example",
  description: "Description here",
};
```

### Component Props Pattern

Always use TypeScript interfaces for component props:

```astro
---
interface Props {
  title: string;              // Required
  subtitle?: string;          // Optional
  variant?: 'default' | 'alt'; // Optional with union type
}

const {
  title,
  subtitle,
  variant = 'default',  // Default value
} = Astro.props;
---
```

### CTA (Call-to-Action) Pattern

CTAs follow a consistent interface:

```typescript
{
  label: string;
  href: string;
  external?: boolean;  // For external links
}
```

### Section Structure

Most page sections follow this pattern:

```astro
<section id="section-id" class="py-16 md:py-12">
  <div class="max-w-6xl mx-auto px-6 md:px-2">
    <!-- Section content -->
  </div>
</section>
```

## Best Practices

### When Creating New Components

1. **Define Props Interface**: Always create a TypeScript interface for props
2. **Provide Defaults**: Use default values for optional props in destructuring
3. **Use Semantic HTML**: Choose appropriate HTML5 elements (`section`, `article`, `nav`, etc.)
4. **Responsive Design**: Include mobile breakpoints for all layouts
5. **Accessibility**: Add proper ARIA labels and semantic structure
6. **Theme Support**: Use CSS custom properties for colors, not hardcoded values

### When Modifying Data Configs

1. **Update Interface**: If adding new fields, update the TypeScript interface first
2. **Maintain Structure**: Keep consistent structure across similar config files
3. **Provide Examples**: Include sample data that demonstrates all available options
4. **Type Safety**: Export both the interface and the configuration object

### When Working with Styles

1. **Use CSS Variables**: Leverage existing CSS custom properties in `global.css`
2. **Theme Compatibility**: Ensure styles work in both light and dark themes
3. **Tailwind First**: Prefer Tailwind utilities over custom CSS when possible
4. **Consistent Spacing**: Use standard spacing scale (py-8, py-12, py-16, etc.)

### When Creating Pages

1. **Use Layout**: Import and use the base `Layout.astro` component
2. **SEO Meta**: Always provide `title` and `description` props
3. **Component Composition**: Build pages by composing existing components
4. **Section IDs**: Use meaningful IDs for anchor navigation

## Common Patterns

### Conditional Rendering

```astro
{description && <p>{description}</p>}
{items.length > 0 && <ul>...</ul>}
```

### Dynamic Classes

```astro
---
const classes = `base-class ${variant === 'alt' ? 'alt-class' : 'default-class'}`;
---
<div class={classes}>...</div>
```

### External Links

```astro
<a
  href={href}
  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
>
  {label}
</a>
```

### Reusable Button Component

Use the `Button.astro` component for all CTAs:

```astro
<Button
  label="Click Me"
  href="/path"
  variant="primary"
  external={false}
/>
```

## File Organization

### Adding New Features

- **Components**: Place in `src/components/`
- **Pages**: Add to `src/pages/` (auto-routed by filename)
- **Data**: Configuration files go in `src/data/`
- **Images**: Store in `src/assets/`
- **Styles**: Shared styles in `src/styles/global.css`

### Data File Naming

Match component names for clarity:
- `Hero.astro` → No separate data file (configured inline)
- `CardGrid.astro` → `cardGrid.ts` (reusable grids)
- `Menu.astro` → `menu.ts` (menu items)

## Deployment & Build

- Production builds output to `./dist/`
- Base URL configured in `astro.config.mjs`
- Site optimized for static hosting (Vercel, Netlify, GitHub Pages)
- Assets are automatically optimized during build

## Key Configuration Files

- `astro.config.mjs` - Astro configuration, site URL, base path
- `tsconfig.json` - TypeScript strict mode configuration
- `package.json` - Dependencies and scripts
- `src/data/site.ts` - Master site configuration (company info, contact, social)
- `src/styles/global.css` - Theme variables and global styles

## Important Notes

- **No Runtime JavaScript**: Astro components are server-rendered (unless using client directives)
- **Type Safety**: All `.ts` files use TypeScript strict mode
- **Theme Persistence**: Theme choice stored in localStorage (see `Layout.astro`)
- **Mobile-First**: Always design for mobile viewports first, then scale up
- **Component Reusability**: Prefer composing existing components over creating new ones

## When Suggesting Code Changes

1. **Maintain Existing Patterns**: Follow established conventions in the codebase
2. **TypeScript First**: Always use TypeScript interfaces and type annotations
3. **Responsive by Default**: Include responsive classes in all layouts
4. **Theme-Aware**: Use CSS variables instead of hardcoded colors
5. **Accessibility**: Include ARIA labels and semantic HTML
6. **Performance**: Keep components lightweight and avoid unnecessary JavaScript
7. **Consistency**: Match the style and structure of existing similar components
