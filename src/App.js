import './App.css';
import {All_products} from "./Components/All_products";
import {Cart} from "./Components/Cart";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import {Product_Detail} from "./Components/Product_Detail";
import {Home_page} from "./Components/Home_page";

function App() {
  return (<Router>

    <div>
        <header className="header">
            <Link to={'/cart'}>Go to my cart</Link>
            <br/>
            <Link to={'/products'}>All products</Link>
            <br/>
            <Link to={'/'}>Home</Link>
        </header>

        <Route exact path={'/'} component={Home_page}/>
        <Route exact path={'/cart'} component={Cart}/>
        <Route exact path={'/products/:id'} component={Product_Detail}/>
        <Route exact path={'/products'} component={All_products}/>
    </div>
          </Router>);
}

export default App;
