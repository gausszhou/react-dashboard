import Home from "./pages/home/Home"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import LayoutMain from "./layouts/main/Main";
import Login from "./pages/login/Login";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }

  ]);

  return <RouterProvider router={router}></RouterProvider>

}

export default App
