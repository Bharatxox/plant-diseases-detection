import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import NotFound from "./views/not-found";
import ImageUpload from "./components/imageUplode";
import ResultPage from "./components/resultPage";
import Login from "./pages/Login and signup/Login";
import SignUp from "./pages/Login and signup/SignUp";
import Layout from "./components/Layout";
import Error from "./views/not-found";
// import PrivateRoute from "./components/PrivateRoute"; // Assuming you have a PrivateRoute component

const App = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upload",
        element: <ImageUpload />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
      // Removed "cart", "allproducts", and "product/:productId" routes
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default App;
