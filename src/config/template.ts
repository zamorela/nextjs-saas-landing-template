// Template configuration
// Update these values to customize your landing page

export const templateConfig = {
  // Basic information
  name: "Your App Name",
  description: "Your app description",
  tagline: "Your compelling tagline",
  
  // Contact information
  email: process.env.NEXT_PUBLIC_EMAIL ?? "your-email@example.com",
  
  // Social media links
  social: {
    telegram: {
      ru: process.env.NEXT_PUBLIC_TELEGRAM_RU_CHANNEL ?? "https://t.me/your-channel-ru",
      en: process.env.NEXT_PUBLIC_TELEGRAM_EN_CHANNEL ?? "https://t.me/your-channel-en",
    },
    instagram: {
      ru: process.env.NEXT_PUBLIC_INSTAGRAM_RU ?? "https://instagram.com/your-instagram-ru",
      en: process.env.NEXT_PUBLIC_INSTAGRAM_EN ?? "https://instagram.com/your-instagram-en",
    },
  },
  
  // Form configuration
  forms: {
    yandex: {
      ru: process.env.NEXT_PUBLIC_YANDEX_FORM_RU ?? "https://forms.yandex.ru/your-form-ru",
      en: process.env.NEXT_PUBLIC_YANDEX_FORM_EN ?? "https://forms.yandex.ru/your-form-en",
    },
    telegramBot: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? "https://t.me/your-bot",
  },
  
  // Support links
  support: {
    link: process.env.NEXT_PUBLIC_SUPPORT_LINK ?? "https://support.example.com",
    text: {
      ru: process.env.NEXT_PUBLIC_SUPPORT_LINK_RU_TEXT ?? "ru",
      en: process.env.NEXT_PUBLIC_SUPPORT_LINK_EN_TEXT ?? "en",
    },
  },
  
  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API ?? "http://localhost:3000/api",
    endpoints: {
      faq: "/faq",
      documents: "/documents",
      subscribe: "/subscribe",
    },
  },
  
  // Feature flags
  features: {
    useApi: false, // Set to true to use real API instead of static data
    showSocialLinks: true,
    showSupportLinks: true,
    enableAnalytics: false,
  },
};

// Helper functions
export const getConfigValue = (key: string, locale: string = 'en'): unknown => {
  const keys = key.split('.');
  let value: Record<string, unknown> = templateConfig;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k] as Record<string, unknown>;
    } else {
      return undefined;
    }
  }
  
  // If value is an object with locale keys, return the appropriate locale
  if (value && typeof value === 'object' && (locale in value)) {
    return value[locale];
  }
  
  return value;
};
