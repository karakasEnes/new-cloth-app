import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collectionpreview';
import SHOP_DATA from "./shop.data";


export default class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        
        return (
            <div className="shop-page">
                {
                   collections.map(({id, ...otherCollectionProps}) => {
                       return <CollectionPreview key={id} {...otherCollectionProps} /> }) 
                }
            </div>
        )
    }
}


