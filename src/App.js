import React, { Fragment } from "react";
import Header from "./components/Layout/Header.js";
import Meal from "./components/Meals/Meal.js";
import Cart from "./components/Cart/Cart.js";

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
      <Meal/>
      </main>
    </Fragment>
  );
};

export default App;
