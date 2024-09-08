import { ProductList } from "..";
import { useProducts } from "../hooks/useProducts";

export const MensPage = () => {
  const { productsQuery } = useProducts({
    filterKey: "men's clothing",
  });

  const products = productsQuery.data ?? [];

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Products for men</h1>

      <ProductList products={products} />
    </div>
  );
};
