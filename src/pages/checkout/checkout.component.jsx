import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/cart/cart.selecters";
import CheckOutItem from "../../components/checkout-item/checkouti-item.component";
import StripeCheckout from "../../components/stripe-button/stripe.button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningTextContainer,
} from "./checkout.styles";

const CheckOut = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckOutItem cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: € {total}</span>
    </TotalContainer>
    <WarningTextContainer>
      *Please use the following test credit card code for payment*
      <br />
      4242 4242 4242 4242 - 01/21 123
    </WarningTextContainer>
    <StripeCheckout price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckOut);
