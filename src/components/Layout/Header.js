import React, { Fragment } from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.96abddfc.jpg";

const Header = () =>{
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of Meals"/>
        </div>
        </Fragment>
    )
};

export default Header;