import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/SideBar'
import FetchData from './components/FetchData'
import FetchApi from './components/FetchApi'
import LoginForm from './components/LoginForm';
import ProductsDetails from './components/ProductsDetails';
import Products from './components/products';
import LoginValidation from './components/LoginValidation'
import ParentForm from './liftingState/ParentForm';


function App() {


  
  return (
    <div className="App">
    <Header/>
    <SideBar/>
    {/* <FetchApi /> */}
    {/* <LoginForm/> */}
    {/* <Router>
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components/products">Products</Link>
          </li>
          <li>
            <Link to="/ProductsDetails">Product Details</Link>
          </li>
        </ul>

        <hr />
    <Switch>
          <Route path="/components/products">
            <Products />
          </Route>
          <Route path="/ProductsDetails">
            <ProductsDetails />
          </Route>
        
        </Switch>
        </Router> */}

    </div>
  );
}

export default App;
