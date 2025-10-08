# Product Manager Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a blog.

## Features

- 🎨 Minimalist, clean design
- 🌓 Dark mode support with theme toggle
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive
- 📝 Blog functionality
- 📧 Typeform contact integration
- 🔗 Social media links (LinkedIn, GitHub)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Customization

### Personal Information

Update the following files with your information:

- `components/hero.tsx` - Name, title, bio, and profile photo
- `components/navigation.tsx` - GitHub and LinkedIn URLs
- `components/experience.tsx` - Work experience details
- `components/education.tsx` - Education history
- `components/projects.tsx` - Project details and links
- `components/footer.tsx` - Name in copyright

### Profile Photo

Replace `/public/placeholder-profile.jpg` with your photo (recommended: 400x400px)

### Project Images

Replace the placeholder images in `/public/`:
- `placeholder-project-1.jpg`
- `placeholder-project-2.jpg`
- `placeholder-project-3.jpg`
- `placeholder-project-4.jpg`

Recommended size: 600x400px

### Typeform Contact Form

1. Create your form at [Typeform](https://www.typeform.com)
2. Get your form's embed URL
3. Update the `typeformUrl` in `components/contact.tsx`

### Blog Posts

Blog posts are currently hardcoded in `app/blog/[slug]/page.tsx`. To add new posts:

1. Add a new entry to the `blogPosts` object in `app/blog/page.tsx`
2. Add the post content to the `blogPosts` object in `app/blog/[slug]/page.tsx`

For a more robust solution, consider using MDX or a CMS like Contentful or Sanity.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Dark Mode**: next-themes
- **Icons**: Lucide React

## Deploy on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── blog/            # Blog pages
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── navigation.tsx
│   ├── hero.tsx
│   ├── experience.tsx
│   ├── education.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   └── footer.tsx
└── public/              # Static assets
```
