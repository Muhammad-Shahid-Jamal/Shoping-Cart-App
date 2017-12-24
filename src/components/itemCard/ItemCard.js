import React, {Component} from "react";
import "./css/itemCard.css";

export default class ItemCard extends Component{
    render(){
        const _ItemImageUrl = "https://dummyimage.com/600x400/000/fff";
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <div className="singleItem">
                    <div style={{"backgroundImage":"url("+_ItemImageUrl+")"}} className="item-img">
                    </div>
                    <h3>Name</h3>
                    <p>Lorem ipsem lorem ipsem</p>
                    <h4 className="text-center">Price: <span className="price">$123</span></h4>
                </div>
            </div>
        );
    }
}