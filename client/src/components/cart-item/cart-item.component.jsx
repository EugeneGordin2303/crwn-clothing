import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    NameContainer} from './cart-item.styles.jsx';

const CartItem = ({
    item:{
        imageUrl,
        price,
        name,
        quantity
    }
}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item'></img>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span className='price'>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);


export default CartItem;