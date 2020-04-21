import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';
import CartItems from '../../components/cart-item/cart-item.component';

const CheckoutPage = ({CartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {CartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <div className='total'>
            <span>TOTAL: $ {total}</span>
        </div>
        <div className='test-warning'>
        Please use following test card for payments
        <br/>
        4242 4242 4242 4242 - Expire date: MM/YY - CVV: 123
        <br/>
        for expire date use current month (MM) and year (YY)
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    CartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);