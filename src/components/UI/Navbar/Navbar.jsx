import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
const {isAuth, setIsAuth} = useContext(AuthContext)

const logout = () => {
  setIsAuth(false)
  localStorage.removeItem('auth')
}

  return (
    <div className="navbar">
      <Button onClick={logout}>Exit</Button>
      <div className="navbar__links">
        <Link className="navbar__link" to="/about">About</Link>
        <Link className="navbar__link" to="/posts">Posts</Link>
      </div>
    </div>
  )
}

export default Navbar
