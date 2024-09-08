import { createBrowserRouter } from "react-router-dom";
import {
  CompleteListPage,
  MensPage,
  NewProduct,
  StoreLayout,
  WomensPage,
} from "../products";
import { ErrorPage } from "../ErrorPage";
import { ProductPage } from "../products/pages/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CompleteListPage />,
      },
      {
        path: "men",
        element: <MensPage />,
      },
      {
        path: "women",
        element: <WomensPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "new",
        element: <NewProduct />,
      },
    ],
  },
  {},
]);
