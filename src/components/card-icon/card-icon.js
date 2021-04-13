import React, { Component } from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss";
import {connect} from "react-redux";
import {toggleCard} from "../../reducers/card-reducer/cardActions";
import {selectCardItemsCount} from "../../reducers/card-reducer/card.selector"


class CardIcon extends Component {
    render() {
        const {toggleCardHidden, itemCount} = this.props;
        return (
            <div className="cart-icon"
                onClick={toggleCardHidden}>
                        <ShoppingIcon className="shopping-icon" />
                        <span className="item-count">{itemCount}</span>
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    console.log("i am fired");
    return {toggleCardHidden : () => dispatch(toggleCard()) }

}


const mapStateToProps = (state) => ({
    itemCount : selectCardItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon)
