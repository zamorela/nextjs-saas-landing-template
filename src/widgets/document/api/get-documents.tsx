import { useQuery } from "@tanstack/react-query";
import { documentsData } from "@/data/documents";

// Static data for template
const getDocuments = async () => {
  return Promise.resolve(documentsData);
};

export const useGetDocuments = () => {
  return useQuery({
    queryKey: ["getDocuments"],
    queryFn: () => getDocuments(),
    retry: false,
  });
};
