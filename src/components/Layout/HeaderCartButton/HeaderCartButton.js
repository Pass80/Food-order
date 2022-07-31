import React from 'react'
import CartIcon from '../../Cart/CartIcon/CartIcon';
import  classes from'./HeaderCartButton.module.css';

const  HeaderCartButton = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your cart</span>
        <span className={classes.padge}>3</span>
    </button>
  )
}

export default HeaderCartButton;
