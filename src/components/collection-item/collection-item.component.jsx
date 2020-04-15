import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './../custom-button/custom-button.component';
import {addCartItem} from './../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionFooterContainer, NameContainer, PriceContainer, ImageContainer} from './collection-item.styles.jsx';

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
        <CustomButton onClick={() => addItem(item)} isCollectionItemButton>ADD TO CART</CustomButton>
    </CollectionItemContainer>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);