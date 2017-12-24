import React , {Component} from "react";
import {NavLink} from "react-router-dom";
import "./css/Navbar.css";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span> 
                  </button>
                  <NavLink to='/' className="navbar-brand">ShopiFie</NavLink>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li><NavLink to='/Home' activeClassName='active'>Home</NavLink></li>
                    <li><NavLink to='/Men' activeClassName='active'>Men</NavLink></li>
                    <li><NavLink to='/Women' activeClassName='active'>Women</NavLink></li> 
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}