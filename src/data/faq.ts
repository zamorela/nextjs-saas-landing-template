export interface FaqItem {
  id: number;
  question_en: string;
  question_ru: string;
  answer_en: string;
  answer_ru: string;
  category?: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question_en: "What is this template?",
    question_ru: "Что это за шаблон?",
    answer_en: "This is a modern SaaS landing page template built with Next.js, GSAP animations, and Framer Motion. It's designed for mobile apps and SaaS products.",
    answer_ru: "Это современный шаблон лендинга для SaaS, построенный на Next.js, GSAP анимациях и Framer Motion. Предназначен для мобильных приложений и SaaS продуктов.",
    category: "general"
  },
  {
    id: 2,
    question_en: "How do I customize the content?",
    question_ru: "Как настроить контент?",
    answer_en: "You can customize the content by editing the translation files in the `messages/` folder and updating the static data in the `src/data/` folder.",
    answer_ru: "Вы можете настроить контент, отредактировав файлы переводов в папке `messages/` и обновив статические данные в папке `src/data/`.",
    category: "customization"
  },
  {
    id: 3,
    question_en: "Can I use this for commercial projects?",
    question_ru: "Могу ли я использовать это в коммерческих проектах?",
    answer_en: "Yes, this template is open source and can be used for both personal and commercial projects. Please check the license file for more details.",
    answer_ru: "Да, этот шаблон с открытым исходным кодом и может использоваться как для личных, так и для коммерческих проектов. Подробности смотрите в файле лицензии.",
    category: "license"
  },
  {
    id: 4,
    question_en: "How do I integrate with my API?",
    question_ru: "Как интегрировать с моим API?",
    answer_en: "The template includes API integration examples. You can replace the static data with real API calls by updating the hooks in the `src/widgets/*/api/` folders.",
    answer_ru: "Шаблон включает примеры интеграции с API. Вы можете заменить статические данные на реальные API вызовы, обновив хуки в папках `src/widgets/*/api/`.",
    category: "integration"
  },
  {
    id: 5,
    question_en: "What technologies are used?",
    question_ru: "Какие технологии используются?",
    answer_en: "This template uses Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP, Framer Motion, and React Query for state management.",
    answer_ru: "Этот шаблон использует Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP, Framer Motion и React Query для управления состоянием.",
    category: "technical"
  },
  {
    id: 6,
    question_en: "How do I deploy this template?",
    question_ru: "Как развернуть этот шаблон?",
    answer_en: "You can deploy this template to Vercel, Netlify, or any other hosting platform that supports Next.js. The template is optimized for production deployment.",
    answer_ru: "Вы можете развернуть этот шаблон на Vercel, Netlify или любой другой платформе хостинга, которая поддерживает Next.js. Шаблон оптимизирован для продакшн развертывания.",
    category: "deployment"
  }
];

export const getFaqByCategory = (category: string) => {
  return faqData.filter(item => item.category === category);
};

export const getAllCategories = () => {
  const categories = faqData.map(item => item.category).filter(Boolean);
  return [...new Set(categories)];
};
