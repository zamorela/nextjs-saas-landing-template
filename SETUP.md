# 🛠️ Setup Guide

This guide will help you set up and customize the SaaS Landing Page Template.

## 📋 Prerequisites

Before you begin, make sure you have:
- Node.js 18 or higher installed
- A code editor (VS Code recommended)
- Git installed

## 🚀 Initial Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/your-username/saas-app-landing-template.git
cd saas-app-landing-template

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Basic Configuration
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_API=http://localhost:3000/api

# Social Media (Optional)
NEXT_PUBLIC_TELEGRAM_RU_CHANNEL=https://t.me/your-channel-ru
NEXT_PUBLIC_TELEGRAM_EN_CHANNEL=https://t.me/your-channel-en
NEXT_PUBLIC_INSTAGRAM_RU=https://instagram.com/your-instagram-ru
NEXT_PUBLIC_INSTAGRAM_EN=https://instagram.com/your-instagram-en

# Forms (Optional)
NEXT_PUBLIC_YANDEX_FORM_RU=https://forms.yandex.ru/your-form-ru
NEXT_PUBLIC_YANDEX_FORM_EN=https://forms.yandex.ru/your-form-en
NEXT_PUBLIC_TELEGRAM_BOT_URL=https://t.me/your-bot

# Support (Optional)
NEXT_PUBLIC_SUPPORT_LINK=https://support.example.com
NEXT_PUBLIC_SUPPORT_LINK_RU_TEXT=ru
NEXT_PUBLIC_SUPPORT_LINK_EN_TEXT=en
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### 1. Branding

#### Update App Name
Edit `src/config/template.ts`:
```typescript
export const templateConfig = {
  name: "Your App Name",
  description: "Your app description",
  tagline: "Your compelling tagline",
  // ...
};
```

#### Update Logo
Replace the logo in the header:
1. Update the logo text in `src/widgets/home/components/MainSection.tsx`
2. Or replace the favicon in `public/Favicon.svg`

#### Update Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#FF6B6B',    // Your primary color
      secondary: '#7A5AF7',  // Your secondary color
      // Add more colors as needed
    }
  }
}
```

### 2. Content

#### Update Text Content
Edit the translation files:
- `messages/en.json` - English content
- `messages/ru.json` - Russian content

#### Update FAQ
Edit `src/data/faq.ts`:
```typescript
export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Your question?",
    answer: "Your answer.",
    category: "general"
  },
  // Add more FAQ items
];
```

#### Update Documents
Edit `src/data/documents.ts`:
```typescript
export const documentsData: Document[] = [
  {
    id: 1,
    title: "Your Document Title",
    slug: "your-document-slug",
    content: "# Your Document Content\n\n...",
    excerpt: "Brief description",
    publishedAt: "2024-01-01",
    category: "legal"
  },
  // Add more documents
];
```

### 3. Images

#### Replace Hero Images
Update images in `src/assets/image/`:
- `hero-section.png` - Main hero image
- `hero-section-vinograd.png` - Secondary hero image
- `Iphone 14 - 5 (4).png` - Phone mockup 1
- `Iphone 14 - 5 (5).png` - Phone mockup 2

#### Update Social Media Images
Replace images in `public/`:
- `image_en.png` - English social media image
- `image_ru.png` - Russian social media image

### 4. Features

#### Enable/Disable Features
Edit `src/config/template.ts`:
```typescript
features: {
  useApi: false,           // Use real API instead of static data
  showSocialLinks: true,   // Show social media links
  showSupportLinks: true,  // Show support links
  enableAnalytics: false,  // Enable analytics tracking
}
```

#### Add Analytics
1. Get your Google Analytics ID
2. Add it to your environment variables
3. Update the analytics configuration

## 🔌 API Integration

### Using Static Data (Default)
The template works out of the box with static data. No additional setup required.

### Using Real API
1. Set up your API endpoints
2. Update the API configuration in `src/config/template.ts`
3. Set `useApi: true` in the features
4. Update your API endpoints in `.env.local`

### API Endpoints
The template expects these endpoints:
- `GET /api/faq` - FAQ data
- `GET /api/documents` - Documents list
- `GET /api/documents/[slug]` - Document detail
- `POST /api/subscribe` - Newsletter subscription

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms
The template works with any platform that supports Next.js.

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
- Make sure all dependencies are installed
- Check for TypeScript errors
- Verify environment variables

#### Styling Issues
- Clear browser cache
- Check Tailwind CSS configuration
- Verify CSS imports

#### Animation Issues
- Check GSAP imports
- Verify ScrollTrigger setup
- Check browser console for errors

### Getting Help
- Check the [GitHub Issues](https://github.com/your-username/saas-app-landing-template/issues)
- Read the [Documentation](README.md)
- Contact support

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Happy coding! 🚀
