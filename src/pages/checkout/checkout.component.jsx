import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../Redux/cart/cart.selecters";
import CheckOutItem from '../../components/checkout-item/checkouti-item.component'
import StripeCheckout from '../../components/stripe-button/stripe.button.component'

import "./checkout.style.scss";

const CheckOut = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
      {
        cartItems.map( cartItem => <CheckOutItem cartItem={cartItem}/> )
      }
    <div className='total'>
    <span>TOTAL: € {total}</span>
    </div>
    <div className='test-warning'>
    *Please use the following test credit card code for payment*
    <br/>
    4242 4242 4242 4242 - 01/21 123
    </div>
    <StripeCheckout price ={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckOut);
