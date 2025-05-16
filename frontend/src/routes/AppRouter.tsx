import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "@layouts/MainLayout/MainLayout";
// pages
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
import Error from "@pages/Error";
import { SusbenseHandler } from "@components/feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <SusbenseHandler>
            <Home />
          </SusbenseHandler>
        ),
      },
      {
        path: "cart",
        element: (
          <SusbenseHandler >
            <Cart />
          </SusbenseHandler>
        ),
      },
      {
        path: "categories",
        element: (
          <SusbenseHandler >
            <Categories />
          </SusbenseHandler>
        ),
      },
      {
        path: "wishlist",
        element: (
          <SusbenseHandler >
            <Wishlist />
          </SusbenseHandler>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <SusbenseHandler >
            <Products />
          </SusbenseHandler>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: (
          <SusbenseHandler >
            <AboutUs />
          </SusbenseHandler>
        ),
      },
      {
        path: "login",
        element: (
          <SusbenseHandler >
            <Login />
          </SusbenseHandler>
        ),
      },
      {
        path: "register",
        element: (
          <SusbenseHandler >
            <Register />
          </SusbenseHandler>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
