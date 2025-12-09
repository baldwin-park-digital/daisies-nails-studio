## Image Optimization Setup

This project can use Astro's official image optimization integration for automatic resizing, format conversion, and lazy loading.

### 1. Install the integration
```sh
npm install @astrojs/image
```

### 2. Add to `astro.config.mjs`
```js
import { astroImage } from '@astrojs/image';
export default defineConfig({
  integrations: [astroImage()],
});
```

### 3. Usage in components/pages
```astro
---
import { Image } from '@astrojs/image/components';
---
<Image src="/src/assets/your-image.jpg" width={400} height={300} alt="Description" />
```

### 4. Best Practices
- Use modern formats (WebP, AVIF)
- Compress images before upload
- Use `loading="lazy"` for below-the-fold images
- Always set `width` and `height` attributes
- Use responsive images with `srcset` and `sizes` if needed
# Service Business Website Template

A professional, ready-to-customize website template for service-based businesses like salons, spas, studios, bakeries, and cafes. Built with **Astro** and **Tailwind CSS** for fast, modern websites.

## ✨ Features

- **Easy Setup** - Customize one config file to populate your entire website
- **Fast & SEO-Friendly** - Built with Astro for optimal performance and search engine ranking
- **Fully Responsive** - Beautiful on desktop, tablet, and mobile devices
- **Modern Design** - Professional styling with Tailwind CSS
- **Pre-built Components**:
  - Hero section with CTA
  - Services showcase
  - Photo gallery
  - Team member profiles
  - Customer reviews carousel
  - Contact information
  - Social media links

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Business

Edit `src/data/company.config.ts` with your business information:

```typescript
export const companyConfig = {
  company: {
    name: "Your Business Name",
    tagline: "Your tagline here",
    description: "Your business description",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@yourbusiness.com",
    address: { /* ... */ },
    bookingUrl: "https://your-booking-system.com",
  },
  // ... more config
};
```

**Note:** See `EXAMPLE.config.ts` for a complete example configuration.

### 3. Add Your Images

Replace placeholder images in `src/assets/`:
- `hero.png` - Main hero image
- `gallery/` - Gallery images
- `team/` - Team member photos

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site in action.

## 📁 Project Structure

```
src/
├── assets/              # Images (hero, gallery, team photos)
├── components/          # Reusable Astro components
│   ├── HeroLanding.astro      # Hero section
│   ├── OurServices.astro      # Services showcase
│   ├── Gallery.astro          # Photo gallery
│   ├── MeetTheTeam.astro      # Team profiles
│   ├── Reviews.astro          # Customer testimonials
│   ├── Nav.astro              # Navigation
│   └── Footer.astro           # Footer
├── data/
│   ├── company.config.ts      # ← CUSTOMIZE THIS FILE
│   ├── contactInfo.ts         # (Auto-populated from config)
│   └── navigation.json        # (Auto-populated from config)
├── pages/               # Website pages
│   ├── index.astro            # Home page
│   ├── about.astro            # About page
│   ├── services.astro         # Services & pricing
│   ├── team.astro             # Team page
│   └── contact.astro          # Contact page
├── layouts/
│   └── Layout.astro           # Base layout with header/footer
└── styles/
    └── global.css             # Global styles
```

## ⚙️ Configuration Guide

### Company Information

```typescript
company: {
  name: "Your Business Name",
  tagline: "Your catchy tagline",
  description: "A comprehensive description of your business",
}
```

### Contact Details

```typescript
contact: {
  phone: "+1 (323) 957-9879",
  phoneHref: "tel:+13239579879",  // Used for tel: links
  email: "contact@yourbusiness.com",
  address: {
    line1: "123 Main Street",
    line2: "Suite 100",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
  },
  bookingUrl: "https://your-booking-system.com",
}
```

### Business Hours

```typescript
hours: [
  { label: "Monday - Friday", value: "9:00 AM – 6:00 PM" },
  { label: "Saturday", value: "10:00 AM – 5:00 PM" },
  { label: "Sunday", value: "Closed" },
]
```

### Social Media

```typescript
social: {
  instagram: "https://www.instagram.com/yourbusiness",
  facebook: "https://www.facebook.com/yourbusiness",
  tiktok: "https://www.tiktok.com/@yourbusiness",
  yelp: "https://www.yelp.com/biz/yourbusiness",
  google: "https://www.google.com/maps/place/yourbusiness",
}
```

### Services

Define your main services (displayed on home page):

```typescript
services: [
  {
    title: "Service Name",
    description: "Short description of the service",
    highlight: "What makes this service special",
  },
]
```

For detailed services with pricing (used on services page), add to `servicesDetailed`:

```typescript
servicesDetailed: {
  category1: [
    {
      name: "Service Name",
      duration: "30 minutes",
      price: "$50",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ],
}
```

### Customer Reviews

```typescript
reviews: [
  {
    id: 1,
    name: "Customer Name",
    quote: "Their testimonial about your business...",
  },
]
```

### Team Members

```typescript
team: [
  {
    id: 1,
    name: "Team Member Name",
    role: "Their Position",
    image: "src/assets/team/member.jpg",
    bio: "Short bio about the team member",
  },
]
```

## 🎨 Customization

### Colors & Styling

Colors are defined using Tailwind CSS. Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: "...",     // Main brand color
      "on-primary": "...", // Text color on primary
    },
  },
}
```

### Fonts

Fonts are configured in the global CSS. Edit `src/styles/global.css` to use custom fonts:

```css
@font-face {
  font-family: 'Your Font';
  src: url('/fonts/your-font.woff2') format('woff2');
}
```

## 📝 Content Pages

### Home Page (`src/pages/index.astro`)

- Hero section
- Featured services
- Gallery
- Customer reviews

### Services Page (`src/pages/services.astro`)

- Full service menu with pricing
- Service categories
- Add-on options

### About Page (`src/pages/about.astro`)

- Your business story
- Mission statement
- Team information

### Team Page (`src/pages/team.astro`)

- Team member profiles
- Photos and bios

### Contact Page (`src/pages/contact.astro`)

- Contact form
- Location map
- Business hours
- Social links

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

The template can be deployed to:
- **Vercel** - `npm i -g vercel && vercel`
- **Netlify** - Connect your Git repo at netlify.com
- **GitHub Pages** - Update `astro.config.mjs` with your repo name
- **Any static host** - Upload the `dist/` folder

## 📱 SEO

The template includes:
- Meta tags and descriptions
- Open Graph tags for social sharing
- XML sitemap (`/sitemap.xml`)
- Robots.txt for search engines
- Structured data for rich search results

Customize SEO in `src/data/company.config.ts`:

```typescript
seo: {
  siteTitle: "Your Business | City",
  siteDescription: "SEO-friendly description of your business",
  siteKeywords: "keyword1, keyword2, keyword3",
}
```

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)

## 📄 License

This template is provided as-is for your business use.

---

**Ready to customize?** Start by editing `src/data/company.config.ts` with your business information!
