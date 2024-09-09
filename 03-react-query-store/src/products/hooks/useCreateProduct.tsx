import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productsActions } from "..";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: productsActions.createProduct,
    onMutate: (product) => {
      console.log("Mutating - Optimistic Update");

      const optimisticProduct = { id: Math.random(), ...product };

      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (old) => {
          if (old === undefined) return [];

          return [...old, optimisticProduct];
        }
      );

      return {
        optimisticProduct,
      };
    },
    onSuccess: (product, _variables, context) => {
      //? Invalidate Query
      // queryClient.invalidateQueries({
      //   queryKey: ["products", { filterKey: product.category }],
      // });

      queryClient.removeQueries({
        queryKey: ["products", context?.optimisticProduct.id.toString()],
      });

      //? Set Data in Query
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (old) => {
          if (old === undefined) return [];

          return old.map((cacheProduct) => {
            return cacheProduct.id === context?.optimisticProduct.id
              ? product
              : cacheProduct;
          });
        }
      );
    },
    onError: (error, variables, context) => {
      queryClient.removeQueries({
        queryKey: ["products", context?.optimisticProduct.id.toString()],
      });

      //? Set Data in Query
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: variables.category }],
        (old) => {
          if (old === undefined) return [];

          return old.filter((cacheProduct) => {
            return cacheProduct.id !== context?.optimisticProduct.id;
          });
        }
      );
    },
    onSettled: () => {},
  });

  return { productMutation };
};
