import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "@/assets/helpers/API_ENDPOINT";
import http from "@/assets/helpers/axiosConfig";

export interface WaitingListSubscriptionData {
  name: string;
  email: string;
  contact: string;
  subscribe: boolean;
}

export const useCreateWaitingListSubscription = () => {
  return useMutation({
    mutationFn: (data: WaitingListSubscriptionData) =>
      http.post(`${API_ENDPOINT.WAITING_LIST_SUBSCRIPTION}`, data),
  });
};
