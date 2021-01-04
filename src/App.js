import "./App.css";

import { Switch, Route } from "react-router-dom";

//HOMEPAGE
import HomePage from "./pages/homepage/homepage.component";

//SHOPPAGE
import ShopPage from './pages/shop/shop.componen'

//HEADER
import Header from './components/header/header.component'

//SIGN IN AND SIGN UP 
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route path="/contact" component=''/>
        <Route path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
