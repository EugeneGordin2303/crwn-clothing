import React from 'react';
 
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import {default as CartIcon} from './../cart-icon/cart-icon.container';
import {default as CartDropdown} from './../cart-dropdown/cart-dropdown.container';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' onClick={ () => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                : 
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown ></CartDropdown>
        }
    </HeaderContainer>
);

export default Header;