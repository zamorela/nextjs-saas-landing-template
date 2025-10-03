import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;
    if (!locale || !['en', 'ru'].includes(locale)) notFound();
    return {
      locale,
      messages: (await import(`../../messages/${locale}.json`)).default
    };
  });