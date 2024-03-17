import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { FormData } from "./use-form-data";

export const useFetchFormData = () => {
  const { data, refetch } = useQuery({
    queryKey: ["GET"],
    queryFn: (): Promise<FormData[]> =>
      fetch("http://localhost:9999/items")
        .then((res) => res.json())
        .then((result) => result),
  });
  return {
    data,
    refetch,
  };
};

export const useSaveFormData = (options?: { onSuccess: () => void }) => {
  const { mutate } = useMutation({
    mutationKey: ["POST"],
    mutationFn: (payload: FormData) => {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: payload.userid, password: payload.password }),
      };
      return fetch("http://localhost:9999/items", option);
    },
    onSuccess: options?.onSuccess,
  });
  return {
    mutate,
  };
};

export const useRemoveFormData = (options?: { onSuccess: () => void }) => {
  const { mutate } = useMutation({
    mutationKey: ["DELETE"],
    mutationFn: (id: string) => {
      const option = {
        method: "DELETE",
      };
      return fetch(`http://localhost:9999/items/${id}`, option);
    },
    onSuccess: options?.onSuccess,
  });
  return {
    mutate,
  };
};
