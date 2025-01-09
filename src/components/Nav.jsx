import React from "react";
import logo from "/images/logo.png";

const Nav = () => {
  return (
    <div id="header">
      <div id="logo">
        <img src={logo} alt="logo" />
        <h2 id="title">DreamikAI</h2>
      </div>

      <div id="header1">
        <h2>
          <a href="/">Go To Shop</a>
        </h2>
        <h2>
          <a href="">Other Product</a>
        </h2>
        <input type="text" id="searchbar" placeholder="search..." />
        <img src="/images/cartlogo1.png" alt="cart" width={30} height={30} />
      </div>
    </div>
  );
};

export default Nav;
