import "./App.css";

import { Switch, Route } from "react-router-dom";

//HOMEPAGE
import HomePage from "./pages/homepage/homepage.component";

//SHOPPAGE
import ShopPage from './pages/shop/shop.componen'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
