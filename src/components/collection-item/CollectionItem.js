import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../custom-button/custom-button"
import {connect} from "react-redux";
import { addItem } from "../../reducers/card-reducer/cardActions";

const CollectionItem = ({item, addItemProp}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style = {{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
                <div className="collection-footer">
                    <div className="name">{name}</div>
                    <div className="price">{price}</div>
                </div>

                <CustomButton 
                inverted
                onClick={() => addItemProp(item) }>ADD CARD</CustomButton>
                

            
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    addItemProp : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);