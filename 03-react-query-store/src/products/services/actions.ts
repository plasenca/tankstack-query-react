import { Product, productsAPI } from "..";
import { ProductLike } from "../interfaces/product.interface";

interface GetProductsOptions {
  filterKey?: string;
}

interface GetProductsParams {
  category?: string;
}

export const getProducts = async ({ filterKey }: GetProductsOptions) => {
  const hasAnyFilter = !!filterKey;

  const params: GetProductsParams | undefined = hasAnyFilter
    ? { category: filterKey }
    : undefined;

  const { data } = await productsAPI.get<Product[]>("/products", {
    params: params,
  });

  return data;
};

interface GetProductOption {
  id: string;
}

export const getProduct = async ({
  id,
}: GetProductOption): Promise<Product> => {
  const { data } = await productsAPI.get<Product>(`/products/${id}`);

  return data;
};

export const createProduct = async (product: ProductLike) => {
  const { data } = await productsAPI.post<Product>(`/products`, product, {});

  return data;
};
