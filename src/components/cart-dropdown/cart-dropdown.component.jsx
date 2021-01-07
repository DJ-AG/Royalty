import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Button from '../button/button.componen'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../Redux/cart/cart.selecters'

import './cart-dropdown.style.scss'



const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.lenght ?
            cartItems.map(cartItem => (<CartItem key= {cartItem.id} item={cartItem}/>))
            :
            <span className='empty-message'>YOUR CART IS EMPTY</span>
        }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default connect(mapStateToProps,null)(CartDropDown)