import {Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signin',
        element: <Register/>
      },
      {
        path: 'terms',
        element: <Terms/>
      }
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router