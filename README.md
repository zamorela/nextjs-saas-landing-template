# 🚀 Modern SaaS Landing Page Template

A beautiful, responsive **Next.js 15** landing page template with **GSAP animations** and **Framer Motion**.  
Perfect for SaaS, mobile apps, and startup landing pages.

![Template Preview](https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Modern+SaaS+Landing+Page)

---

## ✨ Features

- 🎨 **Modern Design** – clean UI with smooth animations
- 📱 **Responsive** – mobile-first, works on all devices
- ⚡ **Performance** – optimized with Next.js 15 + React 19
- 🎭 **Animations** – GSAP scroll effects + Framer Motion transitions
- 🌍 **i18n Ready** – multi-language with next-intl
- 📊 **API Ready** – axios + React Query integration (with mock data by default)
- 🔧 **Easy Customization** – Tailwind + modular structure
- 🎯 **SEO Optimized** – meta tags, sitemap, robots.txt included

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, Framer Motion
- **Data Layer:** React Query + axios (mocked, API-ready)
- **i18n:** next-intl
- **Forms:** React Hook Form

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/saas-landing-template.git
cd saas-landing-template

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Go to 👉 http://localhost:3000

## 📡 API Integration

This template works out of the box with mock data from src/data/.

But it’s also API-ready: 1. Configure your endpoints in .env.local 2. Update src/assets/helpers/API_ENDPOINT.ts 3. Fetch data using axios + React Query in src/widgets/\*/api/

👉 Example: /widgets/faq/api/get-faq.tsx

This way beginners can use static data, and advanced users can instantly connect a backend.

## 📁 Project Structure (simplified)

```bash
src/
├── app/           # Next.js app directory
├── assets/        # Fonts, icons, helpers, images
├── config/        # Template configuration
├── data/          # Mock/static data
├── i18n/          # Localization utils
├── shared/        # Reusable UI + hooks
└── widgets/       # Feature-based components (home, faq, waitingList, etc.)
```

### 📦 Deployment
• **Vercel (recommended):** push to GitHub → connect → deploy
• **Netlify/Other:** npm run build and deploy .next


### 📝 License

MIT – free for personal & commercial use.

### 🤝 Contributing

Pull requests and stars are welcome ⭐

**Made with ❤️ for the dev community**
