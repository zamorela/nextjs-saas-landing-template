import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { DocumentDetailClient } from "@/widgets/document/components/DocumentDetailClient";
import http from "@/assets/helpers/axiosConfig";
import { API_ENDPOINT } from "@/assets/helpers/API_ENDPOINT";

async function getDocumentDetail(slug: string) {
  try {
    const { data } = await http.get(`${API_ENDPOINT.DOCUMENTS}/${slug}`);
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("SEO.DocumentDetail");
  const document = await getDocumentDetail(slug);
  
  if (!document) {
    return {
      title: "Document not found",
      description: "The requested document could not be found.",
    };
  }

  const title = locale === "ru" ? document.title_ru : document.title_en;
  
  return {
    title: t("title", { title }),
    description: t("description", { title }),
    keywords: t("keywords", { title }),
  };
}

export default async function DocumentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DocumentDetailClient slug={slug} />;
}
