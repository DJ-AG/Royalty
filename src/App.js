import React from "react";

import { GlobalStyle } from "./global-styles/global.style";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.action";
import { selectCurrentUser } from "./Redux/user/user.selector";
import { createStructuredSelector } from "reselect";

//HOMEPAGE
import HomePage from "./pages/homepage/homepage.component";

//SHOPPAGE
import ShopPage from "./pages/shop/shop.componen";

//HEADER
import Header from "./components/header/header.component";

//SIGN IN AND SIGN UP
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//CheckOut
import CheckOutPage from "./pages/checkout/checkout.component";

//Footer
import Footer from "./components/footer/footer.componen";

//FireBase
import { auth, createUserProfileDocument } from "./firebase/firebase.util.js";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
        <GlobalStyle />
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component="" />
            <Route path="/checkout" component={CheckOutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapsStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(App);
