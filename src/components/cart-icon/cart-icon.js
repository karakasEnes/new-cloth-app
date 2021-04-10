import React, { Component } from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {connect} from "react-redux";
import SwitchHiddenStatus from "../../reducers/cart-reducer/cartActions"

class CartIcon extends Component {
    render() {
        const {SwitchHidden} = this.props;
        return (
            <div 
            className="cart-icon"
            onClick = {SwitchHidden}
            >
                <ShoppingIcon className="shopping-icon"/>
                <span className="item-count">0</span>
            </div>
            )
    }
}

const mapDispatchToProps = (dispatch) => ({
    SwitchHidden : () => dispatch(SwitchHiddenStatus())
})

export default connect(null, mapDispatchToProps)(CartIcon)
