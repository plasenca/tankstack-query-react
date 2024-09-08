import { Navigate, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";

export const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const { productQuery } = useProduct({ id: params.id ?? "" });

  if (productQuery.isLoading) {
    return (
      <div className="flex-col">
        <p>Cargando...</p>
      </div>
    );
  }

  if (productQuery.data === undefined) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Product</h1>

      <ProductCard product={productQuery.data} />
    </div>
  );
};
