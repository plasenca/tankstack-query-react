import { ProductList } from "..";
import { useProducts } from "../hooks/useProducts";

export const CompleteListPage = () => {
  const { productsQuery } = useProducts({});

  const products = productsQuery.data ?? [];

  return (
    <div className="flex-col w-full">
      <h1 className="text-2xl font-bold">All Products</h1>

      {productsQuery.isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};
