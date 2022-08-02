import React, { Fragment, useState } from 'react'
import Header from './components/Layout/Header/Header';
import Meal from './components/Meals/Meals/Meal';
import Cart from './components/Cart/Cart/Cart';


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <Fragment>
      { cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meal />
      </main>
    </Fragment>
  )
}

export default App;