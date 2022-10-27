import React from "react";
import classes from './Button.module.css'

// все пропсы ...props будут передаваться из родителя
const Button = function ({ children, ...props }) {
  return (
    <button {...props} className={classes.btn}>{children}</button>
  )
}

export default Button
