import React, { Fragment } from 'react'
import classes from'./Header.module.css';
import mealImage from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Feras` Meals</h1>
            <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt='a Table full of food'/>
        </div>
    </Fragment>
  )
}

export default Header;
