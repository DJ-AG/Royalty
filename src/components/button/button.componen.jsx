import React from 'react'
import './button.style.scss'

const Button = ({children, isGoogleSighIn, ...otherProps}) => (
    <button className ={`${isGoogleSighIn ? 'Google': ''} custom-button`} {...otherProps}>{children}</button>
)

export default Button