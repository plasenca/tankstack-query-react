import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  id: string;
}

export const useProduct = ({ id }: Options) => {
  const productQuery = useQuery({
    queryKey: ["products", id],
    queryFn: () => productsActions.getProduct({ id }),
    staleTime: 1000 * 60 * 5,
  });

  return { productQuery };
};
