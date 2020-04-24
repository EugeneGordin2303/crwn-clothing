import React from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from './../cart-item/cart-item.component';


import {
    CartDropdownContainer, 
    CartItemsContainer, 
    EmptyMessageContainer,
    CartDropdownButton} from './cart-dropdown.styles.jsx';


const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
        {
            
            cartItems.length ? 
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            :
            (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
        }
            
        </CartItemsContainer>
        <CartDropdownButton onClick={ () => {
                history.push('/checkout');
                toggleCartHidden();
            }
        }>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);



export default withRouter(CartDropdown);