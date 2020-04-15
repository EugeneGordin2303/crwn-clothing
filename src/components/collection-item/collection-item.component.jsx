import React from 'react';
import { connect } from 'react-redux';

import {addCartItem} from './../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionFooterContainer, NameContainer, PriceContainer, ImageContainer, AddButton} from './collection-item.styles.jsx';

const CollectionItem = ({item, addItem}) => (
    <CollectionItemContainer>
        <ImageContainer
            style={{
                backgroundImage:`url(${item.imageUrl})`
            }}
        />  
        <CollectionFooterContainer>
            <NameContainer>{item.name}</NameContainer>
            <PriceContainer>{item.price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)}>ADD TO CART</AddButton>
    </CollectionItemContainer>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);