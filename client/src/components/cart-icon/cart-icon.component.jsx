import React from 'react';

import {
    CartIconContainer, 
    ItemCountContainer, 
    ShoppingIcon} from './cart-icon.styles.jsx';

const CartIcon  = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);



export default CartIcon;

