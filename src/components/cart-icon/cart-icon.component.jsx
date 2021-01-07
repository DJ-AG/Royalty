import React from "react";

import { connect } from "react-redux";
import { selectCartItemsCount } from '../../Redux/cart/cart.selecters'

import { toggleCartHidden } from "../../Redux/cart/cart.actions";

import "./cart-icon.style.scss";

import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag (1).svg";

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopCartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
