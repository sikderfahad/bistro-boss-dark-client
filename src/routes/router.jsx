import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Authenticate from "../layout/Authenticate/Authenticate";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Test from "../pages/Test/Test";
import DashboardAdmin from "../layout/Dashboard/Admin/DashboardAdmin";
import ClientHome from "../pages/Client/ClientHome/ClientHome/ClientHome";
import MyCart from "../pages/Client/MyCart/MyCart/MyCart";
import AdminHome from "../pages/Admin/AdminHome/AdminHome/AdminHome";
import AllUsers from "../pages/Admin/AllUsers/AllUsers/AllUsers";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  // Landing Page Routes
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },

      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>,
      },

      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },

  // Authenticate Routes
  {
    path: "user",
    element: <Authenticate></Authenticate>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },

  // Dashboard Routes
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardAdmin></DashboardAdmin>
      </PrivateRoute>
    ),
    children: [
      {
        path: "client-home",
        element: (
          <PrivateRoute>
            <ClientHome></ClientHome>,
          </PrivateRoute>
        ),
      },
      {
        path: "client-my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>,
          </PrivateRoute>
        ),
      },

      // ADMIN ROUTES
      {
        path: "admin-home",
        element: (
          <PrivateRoute>
            <AdminHome></AdminHome>,
          </PrivateRoute>
        ),
      },
      {
        path: "admin-all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router;
