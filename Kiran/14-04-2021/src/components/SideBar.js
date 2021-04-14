import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from "./LoginForm";
import Products from "./products";
import ProductsDetails from "./ProductsDetails";
import FetchApi from './FetchApi'
import LoginValidation from './LoginValidation';
import ControlledComponent from "./ControlledComponent";
import ParentLogin from "./ParentLogin";
import Parent from "../liftingState/Parent";
import ParentForm from "../liftingState/ParentForm";




const SideBar=()=>{


    return (
        <div className="App">
          <Router>
    <aside class="sidebar">
  <div id="leftside-navigation" class="nano">
    <ul class="nano-content">
      <li>
        {/* <a href="index.html"><i class="fa fa-dashboard"></i><span>Dashboard</span></a> */}
        <Link to="/Dashboard">Dashboard</Link>

      </li>
      <li class="sub-menu">
        <Link to="/Home">Home</Link>
      </li>
      <li class="sub-menu">
        <Link to="/LoginForm">Login</Link>
      
      </li>
      <li class="sub-menu">
        <Link to="/MyData">Data</Link>

        </li>
        <li class="sub-menu">
        <Link to="/SignUp">SignUp</Link>

        </li>
        <li class="sub-menu">
        <Link to="/Lifting">Practice</Link>

        </li>
        <li class="sub-menu">
        <Link to="/Form">Form</Link>

        </li>
        </ul>
        </div>
        </aside>

       
        <Switch>
        <Route exact path="/Dashboard" component={Products}></Route>
          <Route exact path="/Home" component={ProductsDetails}> </Route>
          <Route exact path="/LoginForm" component={ParentLogin}>
            {/* <LoginForm /> */}
          </Route>
          
          <Route exact path="/SignUp" component={ControlledComponent}>
          </Route>
          <Route exact path="/MyData"  component={FetchApi}>

          </Route>
          <Route exact path="/Lifting"  component={Parent}>
          </Route>
          <Route  path="/Form" >
            <ParentForm/>
          </Route>
        </Switch>
        </Router>
  
    </div>
    )
}


export default SideBar