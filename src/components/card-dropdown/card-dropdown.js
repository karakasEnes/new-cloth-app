import React, { Component } from 'react'
import CustomButton from "../custom-button/custom-button";
import "./card-dropdown.styles.scss";

export default class CardDropdown extends Component {
    render() {
        return (
            <div className="cart-dropdown">
                <div className="custom-dropdown" />
                <CustomButton className="button">GO TO CHECKOUT</CustomButton>
                
            </div>
        )
    }
}
