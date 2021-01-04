import React from "react";

import './header.styles.scss'

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
      ROYALTY
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/signIn">
      SIGN IN
    </Link>
    </div>
  </div>
);

export default Header;
