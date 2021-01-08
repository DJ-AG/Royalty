import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from "../button/button.componen";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../Redux/cart/cart.selecters";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";

import "./cart-dropdown.style.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">YOUR CART IS EMPTY</span>
      )}
    </div>
    <Button onClick={() => {
      history.push("/checkout");
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});


export default withRouter(connect(mapStateToProps)(CartDropDown));
