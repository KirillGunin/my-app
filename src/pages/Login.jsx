import React, { useContext } from "react";
import Button from "../components/UI/Buttons/Button";
import Input from "../components/UI/Inputs/Input";
import { AuthContext } from "../context/context";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    // в сохраняем localStorage только строки
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h2>Авторизуйтесь</h2>
      <form onSubmit={login}>
        <Input type="text" placeholder="login" />
        <Input type="password" placeholder="password" />
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default Login
