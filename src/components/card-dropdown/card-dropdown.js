import React, { Component } from 'react'
import CustomButton from "../custom-button/custom-button";
import "./card-dropdown.styles.scss";
import CardItem from "../card-item/card-item"
import {connect} from "react-redux";
import {selectCardItems} from "../../reducers/card-reducer/card.selector"
import {withRouter} from "react-router-dom";
import {toggleCard} from "../../reducers/card-reducer/cardActions"
import {createStructuredSelector} from "reselect";

class CardDropdown extends Component {
    render() {
        // remember history from withRouter
        const {card_items, history, ...otherProps} = this.props;
        
        return (
            <div className="cart-dropdown">
                <div className="cart-items" >
                {
                    card_items.length ?
                    (card_items.map(card => <CardItem 
                        key={card.id}
                        item={card}
                    />)) :
                    <span className="empty-message">Card is empty!</span>
                }

            </div>
            
            <CustomButton 
            onClick= {() => 
            {
            history.push("/checkout");
            otherProps.dispatch(toggleCard());
            }}

            className="button">GO TO CHECKOUT</CustomButton>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    card_items: selectCardItems
});



export default withRouter(connect(mapStateToProps)(CardDropdown))