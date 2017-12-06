import React , {Component} from "react";
import "./css/Navbar.css";

export default class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <button>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <h3>Home</h3>
            </div>
        );
    }
}