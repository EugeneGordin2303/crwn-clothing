import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const  StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_sMgjl5gYVZDUb2jswGJ5kL7R00TAPzVPTV';

    const onToken = token => {
        alert('Payment Successful');
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

