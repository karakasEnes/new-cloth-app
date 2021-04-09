import React, { Component } from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss";
import {connect} from "react-redux";
import toggleCard from "../../reducers/card-reducer/cardActions";


class CardIcon extends Component {
    render() {
        const {toggleCardHidden} = this.props;
        return (
            <div className="cart-icon"
                onClick={toggleCardHidden}>

                        <ShoppingIcon className="shopping-icon" />
                        <span className="item-count">0</span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCardHidden : () => dispatch(toggleCard()) 
})

export default connect(null, mapDispatchToProps)(CardIcon)
