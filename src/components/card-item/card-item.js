import React, { Component } from 'react'
import "./card-item.scss"
export default class CardItem extends Component {
    render() {
        const {item: {imageUrl, name, price, quantity}} = this.props
        return (
            <div className="cart-item">
                <img className="img" src={imageUrl} alt="card"/>
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity} x {price}</span>

                </div>
                
            </div>
        )
    }
}
