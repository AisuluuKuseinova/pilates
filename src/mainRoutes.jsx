import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { ADMIN } from "./sos/consts";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import AddProduct from "./components/Product/AddProduct";
import PaymentPage from "./pages/PaymentPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 3,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 4,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 5,
    },
    {
      link: "/aboutUs",
      element: <AboutUsPage />,
      id: 6,
    },
    {
      link: "/adminpanel",
      element: <AddProduct />,
      id: 6,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 7,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
