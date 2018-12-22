import React, { Component } from 'react';
import CartItem from './cartitem.js';

class CartItems extends Component {

    getTotal = (totals) => {
        const result = totals.length >= 1 ? totals.reduce((a, b) => {return a + b}, 0) : this.props.noTotal
        return <h5>Total: ${(result / 100).toFixed(2)}</h5>
    }

    render() {
        // console.log(this.props)
        const calcTotal = this.getTotal(this.props.total)
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
                    {calcTotal}
                </div>
            </div>
        )
    }
}

export default CartItems