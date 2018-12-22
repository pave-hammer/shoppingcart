import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        return (
            <div className="collection-item">
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">{this.props.product.name}</div>
                            <div className="col-md-2">${(this.props.product.price / 100).toFixed(2)}</div>
                            <div className="col-md-2">{this.props.quantity}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;