import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        // console.log(this.props)
        return (
            <div className="collection-item">
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-lg-8">{this.props.product.name}</div>
                            <div className="col-md-2">{this.props.product.priceInCents}</div>
                            <div className="col-md-2">{this.props.quantity}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;