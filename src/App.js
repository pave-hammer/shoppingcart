import React, { Component } from 'react';
import Header from './components/header.js';
import CartItems from './components/cartitems.js';
import CartFooter from './components/cartfooter.js';

class App extends Component {

  constructor() {
      super()
      this.state = {
          cartItemList: this.cartItemList
      }
  }

  render() {
    let copyright = '\u00A9'
    let crDate = 2018
    let cartItemList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    return (
      <div>
        <Header />
        <CartItems key={  }cartItemList={ cartItemList } />
        <CartFooter copyright={ copyright } crDate={ crDate } />
      </div>
    );
  }
}

export default App;
