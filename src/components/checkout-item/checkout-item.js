import React, { Component } from 'react'
import "./checkout-item.styles.scss";

export default class CheckOutItem extends Component {
    render() {
        const {name, quantity, price, imageUrl} = this.props.item;
        return (
            <div className="checkout-item">
                <div className="image-container">
                    <img alt="img" src={imageUrl} />
                </div>

                <span className="name">{name}</span>
                <span className="quantity">{quantity}</span>
                <span className="price">{price}</span>
                <div className="remove-button">&#10060;</div>
                
            </div>
        )
    }
}
