import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectCartItemsCount } from './../../redux/cart/cart.selectors'

import {CartIconContainer, ItemCountContainer, ShoppingIcon} from './cart-icon.styles.jsx';

const CartIcon  = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);

