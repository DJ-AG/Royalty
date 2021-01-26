import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.style";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="Item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span className="price">
        {quantity} x €{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
