// Example FAQ data structure for users
// This shows how to structure data for dynamic localization

export interface FaqItemExample {
  id: number;
  // Base keys (will be used as fallback)
  question: string;
  answer: string;
  // Localized keys (automatically detected by the system)
  question_en?: string;
  question_ru?: string;
  question_es?: string; // Spanish example
  question_fr?: string; // French example
  answer_en?: string;
  answer_ru?: string;
  answer_es?: string;
  answer_fr?: string;
  category?: string;
}

// Example data structure that users can follow
export const faqExampleData: FaqItemExample[] = [
  {
    id: 1,
    // Base keys (fallback)
    question: "What is this template?",
    answer: "This is a modern SaaS landing page template.",
    // Localized keys (automatically used by the system)
    question_en: "What is this template?",
    question_ru: "Что это за шаблон?",
    question_es: "¿Qué es esta plantilla?",
    question_fr: "Qu'est-ce que ce modèle?",
    answer_en: "This is a modern SaaS landing page template built with Next.js, GSAP animations, and Framer Motion.",
    answer_ru: "Это современный шаблон лендинга для SaaS, построенный на Next.js, GSAP анимациях и Framer Motion.",
    answer_es: "Esta es una plantilla de página de destino SaaS moderna construida con Next.js, animaciones GSAP y Framer Motion.",
    answer_fr: "Il s'agit d'un modèle de page d'accueil SaaS moderne construit avec Next.js, animations GSAP et Framer Motion.",
    category: "general"
  },
  {
    id: 2,
    question: "How do I customize the content?",
    answer: "You can customize the content by editing the files.",
    question_en: "How do I customize the content?",
    question_ru: "Как настроить контент?",
    answer_en: "You can customize the content by editing the translation files in the `messages/` folder and updating the static data in the `src/data/` folder.",
    answer_ru: "Вы можете настроить контент, отредактировав файлы переводов в папке `messages/` и обновив статические данные в папке `src/data/`.",
    category: "customization"
  }
];

// Usage instructions for users:
/*
HOW TO USE DYNAMIC LOCALIZATION:

1. Add your data with base keys (question, answer, title, etc.)
2. Add localized versions with _[locale] suffix:
   - question_en, question_ru, question_es, etc.
   - answer_en, answer_ru, answer_es, etc.

3. The system will automatically:
   - Detect the current locale
   - Use the appropriate localized key
   - Fallback to base key if localized not found
   - Fallback to English if current locale not found

4. Supported locales are defined in your i18n configuration

EXAMPLE:
{
  id: 1,
  question: "Base question", // Fallback
  answer: "Base answer",     // Fallback
  question_en: "English question",
  question_ru: "Русский вопрос",
  question_es: "Pregunta en español",
  answer_en: "English answer",
  answer_ru: "Русский ответ",
  answer_es: "Respuesta en español"
}
*/
