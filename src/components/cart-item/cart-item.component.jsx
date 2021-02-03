import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  NameContainer,
  CartItemImage
} from "./cart-item.style";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="Item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span className="price">
        {quantity} x €{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
