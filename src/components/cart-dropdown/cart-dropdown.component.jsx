import React from 'react'
import {connect} from 'react-redux'

import Button from '../button/button.componen'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.style.scss'



const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem => <CartItem key= {cartItem.id} item={cartItem}/>)
        }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems,
})

export default connect(mapStateToProps,null)(CartDropDown)