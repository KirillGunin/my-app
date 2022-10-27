import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import NotFound from "../components/UI/NotFound/NotFound";

export const privateRoutes = [
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostIdPage />, exact: true },
  { path:'/notfound', element: <NotFound />, exact: true },
  { path: '*', element: <NotFound />, exact: true }

  
]

export const publicRoutes = [
  { path: '/login', element: <Login/>, exact: true },
]
