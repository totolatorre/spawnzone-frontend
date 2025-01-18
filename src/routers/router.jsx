import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/videogame/CartPage";
import CheckoutPage from "../pages/videogame/CheckoutPage";
import SingleVideogame from "../pages/videogame/SingleVideogame";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/videogame/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageVideogames from "../pages/dashboard/manageVideogames/ManageVideogames";
import AddVideogame from "../pages/dashboard/addVideogame/AddVideogame";
import UpdateVideogame from "../pages/dashboard/EditVideogame/UpdateVideogame";
import UserDashboard from "../pages/dashboard/users/UserDashboard";
import About from "../pages/About";
import Servizi from "../pages/Servizi";
import Contatti from "../pages/Contatti";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/ordini",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div><About/></div>
        },
        {
          path: "/servizi",
          element: <div><Servizi/></div>
        },
        {
          path: "/contatti",
          element: <div><Contatti/></div>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/registrati",
          element: <Register/>
        },
        {
          path: "/carrello",
          element: <CartPage/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
          path: "/videogames/:id",
          element: <SingleVideogame/>
        },
        {
          path: "/user-dashboard",
          element: <PrivateRoute><UserDashboard/></PrivateRoute>
        }
        
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-videogame",
          element: <AdminRoute>
            <AddVideogame/>
          </AdminRoute>
        },
        {
          path: "edit-videogame/:id",
          element: <AdminRoute>
            <UpdateVideogame/>
          </AdminRoute>
        },
        {
          path: "manage-videogames",
          element: <AdminRoute>
            <ManageVideogames/>
          </AdminRoute>
        }
      ]
    }
  ]);

  export default router;