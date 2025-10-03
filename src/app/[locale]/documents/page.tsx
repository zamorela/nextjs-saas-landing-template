import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DocumentsPageClient } from "@/widgets/document/components/DocumentsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO.DocumentsPage");
  
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function DocumentsPage() {
  return <DocumentsPageClient />;
}
