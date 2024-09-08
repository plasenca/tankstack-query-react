import { useQueryClient } from "@tanstack/react-query";
import { productsActions } from "..";

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchData = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ["products", id.toString()],
      queryFn: () => productsActions.getProduct({ id: id }),
      staleTime: 1000 * 60 * 5,
    });
  };

  return { prefetchData };
};
