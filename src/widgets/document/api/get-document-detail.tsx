import { useQuery } from "@tanstack/react-query";
import { getDocumentBySlug } from "@/data/documents";

// Static data for template
const getDocumentDetail = async (slug: string) => {
  const document = getDocumentBySlug(slug);
  if (!document) {
    throw new Error('Document not found');
  }
  return document;
};

export const useGetDocumentDetail = (slug: string) => {
  return useQuery({
    queryKey: ["getDocumentDetail", slug],
    queryFn: () => getDocumentDetail(slug),
    retry: false,
    enabled: !!slug,
  });
};
