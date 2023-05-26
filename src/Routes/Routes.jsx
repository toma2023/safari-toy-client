import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateMyToys from "../pages/UpdateMyToys/UpdateMyToys";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: 'viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails> </PrivateRoute>,
        loader: ({params})=>fetch(`https://safari-toy-shop-server.vercel.app/singleToyById/${params.id}`)
      },
      {
        path: 'addatoy',
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: 'mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'updateMyToys/:id',
        element: <UpdateMyToys></UpdateMyToys>,
        loader: ({params})=>fetch(`https://safari-toy-shop-server.vercel.app/updateMyToys/${params.id}`)

      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },

    ]
  },
]);

export default router;