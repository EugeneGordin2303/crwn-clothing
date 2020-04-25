import React from 'react';

import {
    CheckoutItemContainer,
    ImageContainer,
    SpanContainer, 
    QuantityContainer,
    RemoveBtnContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'></img>
            </ImageContainer>
            <SpanContainer>{name}</SpanContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <SpanContainer>${price}</SpanContainer>
            <RemoveBtnContainer onClick={() =>
                clearItem(cartItem)
            }>&#10005;</RemoveBtnContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;