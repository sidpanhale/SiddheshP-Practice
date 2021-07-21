import React from "react";
import HeaderPic from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1 style={{ paddingLeft: "25px" }}>Meals</h1>
        <span style={{ paddingRight: "25px" }}>
          <HeaderCartButton onClick={props.onShowCart} />
        </span>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderPic} alt="HeaderPic" />
      </div>
    </>
  );
}
