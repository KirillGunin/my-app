import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Страница не найдена</h2>
      <Link className="navbar__link" to="/posts">Вернуться к постам</Link>
    </div>
  )
}

export default NotFound
