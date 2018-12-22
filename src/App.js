import React, { Component } from 'react';
import Header from './components/header.js';
import CartItems from './components/cartitems.js';
import AddItem from './components/additem.js';
import CartFooter from './components/cartfooter.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      product: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      currentQuantity: "",
      currentOrder: [],
      selected: "",
      total: [],
      noTotal: "000"
    }
  }

  onSelect = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  onChange = (event) => {
    this.setState({
      currentQuantity: event.target.value
    })
  }

  onSubmit = (event) => { 
    event.preventDefault() 
    const order = {
      product: {
        id: this.state.product.length + 1,
        name: this.state.selected,
        price: this.state.product.priceInCents
      },
      quantity: this.state.currentQuantity
    }
    const price = this.state.product.filter(data => {
      if(this.state.selected === data.name) {
        order.product.id = data.id
        order.product.name = this.state.selected
        order.product.price = (data.priceInCents * this.state.currentQuantity) 
        order.quantity = this.state.currentQuantity
      }
    })
    this.setState({
      currentOrder: this.state.currentOrder.concat(order),
      total: [...this.state.total, order.product.price]
    })
  }

  render() {
    // console.log("selected", this.state.selected)

    let copyright = '\u00A9'
    let crDate = 2018
    return (
      <div>
        <Header />
        <CartItems cartItemList={ this.state.currentOrder } total={ this.state.total } noTotal={ this.state.noTotal }/>
        <AddItem products={ this.state.product } onSubmit={ this.onSubmit } onChange={ this.onChange } onSelect={this.onSelect} />
        <CartFooter copyright={ copyright } crDate={ crDate } />
      </div>
    );
  }
}

export default App;
