# Fixabygglov - Ark-kon Website

A production-ready Next.js 14 website for Ark-kon, a Swedish architectural consulting company specializing in building permits, architectural design, construction, and HVAC services.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Fully responsive** design
- **SEO optimized** with metadata and sitemap
- **Production ready** configuration
- **Swedish language** content

## 🏗️ Project Structure

```
src/
├── app/
│   ├── kontakt/          # Contact page
│   ├── priser/           # Pricing page
│   ├── projekt/          # Projects page
│   ├── tjanster/         # Services page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # SEO sitemap
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Site footer
└── lib/
    └── utils.ts          # Utility functions
```

## 📄 Pages

- **/** - Homepage with company overview and services preview
- **/tjanster** - Detailed services page
- **/projekt** - Portfolio of completed projects
- **/priser** - Pricing information
- **/kontakt** - Contact form and company information

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fixabygglov
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The website uses a minimalistic, sleek design with:

- **Primary color**: Blue (#2563eb)
- **Typography**: Geist Sans font family
- **Components**: shadcn/ui components
- **Responsive**: Mobile-first approach
- **Accessibility**: WCAG compliant

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO Features

- Meta tags optimization
- Structured data
- Sitemap generation
- Robots.txt
- Swedish language attributes
- Open Graph tags

## 🚀 Deployment

The project is configured for easy deployment with:

- **Vercel** (recommended)
- **Netlify**
- **Docker** (standalone build)

### Deploy to Vercel

1. Push to GitHub/GitLab
2. Connect to Vercel
3. Deploy automatically

### Build for Docker

```bash
npm run build
```

The standalone output will be in `.next/standalone/`

## 📧 Contact Integration

The contact form is ready for integration with:

- Email services (SendGrid, Mailgun, etc.)
- Form handling services (Formspree, Netlify Forms, etc.)
- Custom API endpoints

## 🔧 Customization

### Adding New Pages

1. Create directory in `src/app/`
2. Add `page.tsx` file
3. Optional: Add `layout.tsx` for page-specific metadata
4. Update navigation in `src/components/navigation.tsx`

### Styling

- Modify `tailwind.config.js` for design tokens
- Update `src/app/globals.css` for global styles
- Use shadcn/ui components for consistency

### Content Management

All content is currently static but can be easily integrated with:

- Headless CMS (Strapi, Sanity, Contentful)
- Markdown files
- External APIs

## 📊 Performance

The website is optimized for performance with:

- Static generation where possible
- Image optimization
- Code splitting
- Minimal bundle size
- Fast loading times

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support and questions, contact the development team.