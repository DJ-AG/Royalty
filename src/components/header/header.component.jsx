import React from "react";

import './header.styles.scss'

import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { auth } from '../../Firebase/firebase.util'

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
      <span className='glow'>ROYALTY</span>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    {
      currentUser ? 
      <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
      :
      <Link className='option' to='/signin'>SIGN IN</Link>
    }
    <CartIcon/>
    </div>
    {
      hidden ? null :    <CartDropDown/>
    }
  </div>
);

const mapsStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
  currentUser,
  hidden
})


export default connect(mapsStateToProps)(Header);
