import React, { Component } from 'react';

class AddItem extends Component {
    getProducts = () => {
        const product = this.props.products.map((data, index) => <option key={index}>{data.name}</option>)
        return product
    }

    render() {
        let text = "Products..."
        return (
            <form>
                <div className="container">
                    <div className="form-group">
                        <h3>Quantity</h3>
                        <input type="text" id="quantity" className="form-control" onChange={this.props.onChange} required></input>
                        <h3>Products</h3>
                        <select id="product-select" className="list-group-item" onChange={this.props.onSelect} defaultValue={text}>
                            <option disabled>{text}</option>
                            {this.getProducts(this.props)}
                        </select>
                    </div>
                    <button type="submit" className="btn-dark bg-primary" onClick={this.props.onSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default AddItem