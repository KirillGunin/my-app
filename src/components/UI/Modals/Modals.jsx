import React from 'react'
import classes from './Modals.module.css'

const Modals = ({ children, visible, setVisible }) => {

  const rootClasses = [classes.modals]
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.modalsContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modals
