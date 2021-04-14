import React, { Component } from 'react';
import "./checkout.styles.scss";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect";
import {selectCardItems, selectCardTotal} from "../../reducers/card-reducer/card.selector"
import CheckOutItem from '../../components/checkout-item/checkout-item';

class CheckOut extends Component {
    render() {
        const {cartItems, totalCard} = this.props;
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                    
                    <div className="checkout-block">
                        <span>Product</span>
                    </div>
                    
                    <div className="checkout-block">
                        <span>Description</span>
                    </div>
                    
                    <div className="checkout-block">
                        <span>Quantity</span>
                    </div>
                    
                    <div className="checkout-block">
                        <span>Price</span>
                    </div>
                    
                    <div className="last-child">
                        <span>Remove</span>
                    </div>
                
                </div>

                {cartItems.map(item => <CheckOutItem key={item.id} item={item}/>)}

                

                <div className="total">$ {totalCard}</div>
            </div>
        )
    }
}




const mapStateToProps = createStructuredSelector({
    cartItems: selectCardItems,
    totalCard : selectCardTotal
});


export default connect(mapStateToProps)(CheckOut);