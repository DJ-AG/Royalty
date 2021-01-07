import React from 'react'
import './button.style.scss'

const Button = ({children, isGoogleSighIn, inverted, ...otherProps}) => (
    <button className ={`${inverted ? 'inverted': ''} ${isGoogleSighIn ? 'Google': ''} custom-button`} {...otherProps}>{children}</button>
)

export default Button