import React, { Component } from 'react';
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import ItemCard from "./components/itemCard/ItemCard";

class App extends Component {
  render() {
    return (
      <div className="root">
        <Navbar/>
        <div className="banner">
          <h1>Shopping Cart App</h1>
          <span className="glyphicon glyphicon-chevron-down"></span>
        </div>
        <div className="container">
          <ItemCard/>
        </div>
      </div>
    );
  }
}

export default App;
