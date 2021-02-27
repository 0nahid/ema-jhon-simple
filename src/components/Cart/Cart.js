import { prettyDOM } from '@testing-library/react';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 25){
        shipping = 5.99;
    }
    else if (total > 0){
        shipping = 9.99;
    }

    const tax = total / 10;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered : {cart.length} </p>
            <p>Product Price : {formatNumber(total)} </p>
            <p>Shipping : ${shipping} </p>
            <p><small>Tax + VAT : ${formatNumber(tax)} </small></p>
            <p>Total Price: ${formatNumber(total + shipping +tax)} </p>
        </div>
    );
};

export default Cart;