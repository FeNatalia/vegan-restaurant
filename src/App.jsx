// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Project files
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dishes from "./pages/Dishes";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Dishes} path="/dishes" />
          <Route component={Desserts} path="/desserts" />
          <Route component={Drinks} path="/drinks" />
          <Route component={Contact} path="/contact" />
          <Route exact path="/:id" component={Product} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
