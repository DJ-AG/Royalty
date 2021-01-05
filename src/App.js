import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.action";

//HOMEPAGE
import HomePage from "./pages/homepage/homepage.component";

//SHOPPAGE
import ShopPage from "./pages/shop/shop.componen";

//HEADER
import Header from "./components/header/header.component";

//SIGN IN AND SIGN UP
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//FireBase
import { auth, createUserProfileDocument } from "./Firebase/firebase.util";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser }= this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component="" />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
