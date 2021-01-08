import React, { Component } from 'react';
import GoodsPresentation from "./goodsPresentation/goodsPresentation";
import ShoppingCart from "./shoppingCart/shoppingCart.component";

class Display extends React.Component {
	
  constructor(props){
		super(props);
    }

    componentDidMount() {
      // Hier die Daten reinholen von der Datenbank
      

    }
    
  render() {
    
    return (
      <div>
        <GoodsPresentation/>
        <ShoppingCart/>
      </div>
      );
      
  }
}



export default Display;