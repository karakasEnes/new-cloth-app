import React, { Component } from 'react'
import CustomButton from "../custom-button/custom-button";
import "./card-dropdown.styles.scss";
import CardItem from "../card-item/card-item"
import {connect} from "react-redux";
import {selectCardItems} from "../../reducers/card-reducer/card.selector"

class CardDropdown extends Component {
    render() {
        const {card_items} = this.props;
        return (
            <div className="cart-dropdown">
                <div className="cart-items" >
                {
                    card_items.map(card => <CardItem 
                        key={card.id}
                        item={card}
                    />)
                }

            </div>
            <CustomButton className="button">GO TO CHECKOUT</CustomButton>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    card_items: selectCardItems(state)
})

export default connect(mapStateToProps)(CardDropdown)