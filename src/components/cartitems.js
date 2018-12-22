import React, { Component } from 'react';
import CartItem from './cartitem.js';

class CartItems extends Component {
    // componentDidUpdate() {
    //     this.props.getTotal(this.props.total)
    // }

    render() {
        // console.log(this.props)
        const getTotal = this.c
        const cartItems = this.props.cartItemList.map(item => {
            return (
                <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
            )
        })
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
                    {this.props.getTotal(this.props.total)}
                </div>
            </div>
        )
    }
}

export default CartItems