import React, { Component } from 'react';

class CartFooter extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{this.props.copyright} {this.props.crDate}</a>
            </nav>
        )
    }
}

export default CartFooter