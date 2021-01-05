import React from 'react'

import Button from '../button/button.componen'

import './cart-dropdown.style.scss'


const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

export default CartDropDown