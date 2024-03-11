import Home from "./pages/home/Home"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "users",
      element: <Users></Users>,
    },
    {
      path: "products",
      element: <Products></Products>,
    },
  ]);


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
