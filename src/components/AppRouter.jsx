import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import Login from "../pages/Login";
import { privateRoutes, publicRoutes } from "../routes/routes";
import Preloader from "./UI/Preloader/Preloader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Preloader />
  }
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            element={route.element}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Route path="/login" element={<Navigate replace to="/posts" />} />
        {/* <Route path="*" element={<Navigate replace to="/notfound" />} />
      <Route path="/notfound" element={<NotFound />} /> */}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            element={route.element}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
  )
}

export default AppRouter
