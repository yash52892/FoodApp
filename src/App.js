import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header.js";
import Meal from "./components/Meals/Meal.js";
import Cart from "./components/Cart/Cart.js";
import {CartProvider} from './store/CardProvider';


const App = () => {
  const [cartHandler, setCartHandler]=useState(false);
  const ShowCartHandler=()=>{
    setCartHandler(true);
  }
  const HideCartHandler=()=>{
    setCartHandler(false);
  }
  return (
      <CartProvider>
      {cartHandler && <Cart Onshowcart={HideCartHandler}/>}
      <Header onShowcart={ShowCartHandler}/>
      <main>
      <Meal/>
      </main>
      </CartProvider>
  );
}

export default App;
