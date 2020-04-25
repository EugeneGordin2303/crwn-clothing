import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const  StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_sMgjl5gYVZDUb2jswGJ5kL7R00TAPzVPTV';

    const onToken = token => {
        axios({
            url:'/payment',
            method: 'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Success!')
        }).catch( error =>{
            console.log('Payment error: ', error);
            alert('Oops, something wrong happened. Please, use the test card provided!');
        })
    }

    return (
        <StripeCheckout 
        label='Pay Now' 
        name='CRWN Eugene Ltd.' 
        billingAddress 
        shippingAddress 
        image='https://svgshare.com/i/CUz.svg'
        description={`Your totalis $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;

