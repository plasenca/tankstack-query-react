import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  const productsQuery = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => productsActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 5,
  });

  return { productsQuery };
};
