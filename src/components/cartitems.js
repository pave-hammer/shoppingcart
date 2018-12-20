import React, { Component } from 'react';
import CartItem from './cartitem.js';

class CartItems extends Component {
    render() {
        console.log(this.props)
        const cartItems = this.props.cartItemList.map(item => {
            return (
                <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
            )
        })
        // console.log(this.props)
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                </div>
                <div>
                    {cartItems}
                </div>
            </div>
        )
    }
}

export default CartItems