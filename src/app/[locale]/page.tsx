import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  FunctionalSection,
  MainSection,
  RowScreensSection,
} from "@/widgets/home";
import { ClientSections } from "@/widgets/home/components/ClientSections";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.HomePage");
  
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function Home() {
  return (
    <div className="overflow-hidden flex items-center flex-col">
      <MainSection />
      <RowScreensSection />
      <FunctionalSection />
      <ClientSections />
    </div>
  );
}
