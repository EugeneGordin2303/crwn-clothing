export const addItemToCart = (cartItems, cartItemToAdd) => {
    const found = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (found){
        return cartItems.map( cartItem => cartItem.id === cartItemToAdd.id
             ? {...cartItem, quantity:cartItem.quantity + 1}
             : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}