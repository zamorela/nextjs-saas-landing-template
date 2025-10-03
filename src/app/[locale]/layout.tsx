import type { Metadata } from "next";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { sfPro } from "../font";
import { Header } from "@/shared/components/Header";
import { Footer } from "@/shared/components/Footer";
import Provider from "./Provider";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const siteUrl = "https://your-app.com";

  const getLocalizedContent = (locale: string) => {
    switch (locale) {
      case "en":
        return {
          title: "Your App — Smart Solution for Your Business",
          description:
            "Transform your business with our innovative solution. Get started today and experience the power of modern technology. Join our waitlist for early access and special offers!",
          image: "/image_en.png",
        };
      case "ru":
      default:
        return {
          title: "Your App — умное решение для вашего бизнеса",
          description:
            "Преобразуйте свой бизнес с помощью нашего инновационного решения. Начните сегодня и почувствуйте силу современных технологий. Запишитесь в лист ожидания для раннего доступа и специальных предложений!",
          image: "/image_ru.png",
        };
    }
  };

  const content = getLocalizedContent(locale);

  return {
    title: content.title,
    description: content.description,
    icons: { icon: "/Favicon.svg" },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${siteUrl}${locale === "ru" ? "/ru" : ""}`,
      images: [
        {
          url: `${siteUrl}${content.image}`,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
      locale: locale,
      type: "website",
      siteName: "Your App",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [`${siteUrl}${content.image}`],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head />
      <body className={`${sfPro.variable} min-h-screen flex flex-col`}>
        <Provider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
