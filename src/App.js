import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import ItemCard from "./components/itemCard/ItemCard";
import Modal from "./components/modal/Model";

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="root">
        <Navbar/>
        <div className="banner">
          <h1>Shopping Cart App</h1>
          <span className="glyphicon glyphicon-chevron-down"></span>
        </div>
        <Route path="/">
          <div className="container main-item-container">
            {/* <Route path="/Men" component={()=>{return(<ItemCard/>)}}/> */}
          </div>
        </Route>
        {/* <div className="container main-item-container">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
        <Modal/>
        <button className="item-add" data-toggle="modal" data-target="#addItemModal">+</button> */}
      </div>
      </Router>
    );
  }
}

export default App;
