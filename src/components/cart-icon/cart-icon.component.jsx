import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from "../../Redux/cart/cart.actions";

import "./cart-icon.style.scss";

import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag (1).svg";
import { selectCartItemsCount } from '../../Redux/cart/cart.selecters'

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopCartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
