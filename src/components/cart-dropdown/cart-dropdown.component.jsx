import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../Redux/cart/cart.selecters";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";

import { CartDropDownContainer, CartItemsContainer, EmptyMessageContainer, AddButton } from './cart-dropdown.style'

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>YOUR CART IS EMPTY</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <AddButton onClick={() => {
      history.push("/checkout");
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</AddButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});


export default withRouter(connect(mapStateToProps)(CartDropDown));
