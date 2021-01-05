import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../Redux/cart/cart.actions";

import "./cart-icon.style.scss";

import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag (1).svg";

const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopCartIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
