import React, { Component } from 'react';
import GoodsPresentation from "./goodsPresentation/goodsPresentation";
import ShoppingCart from "./shoppingCart/shoppingCart.component";
import axios from 'axios';
import { Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

class Display extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {
      products:null
    }
  }

    componentDidMount() {
      // Hier die Daten reinholen von der Datenbank

      axios.get( 'http://localhost:8080/eShopBackend/' )
            .then( response => {
                  this.setState( {
                      products:response.data
                  });
                });
    }

  
    
  render() {
    
    return (
      <Container fluid>
        
        
        {/* WICHTIG */}
        {/* FILTER  FUNKTION EINBAUEN ON INPUT */}
        
        <p>Filtere nach  Name</p>
        
        <input/>

        <Row>
          <Col sm={8}>
            <GoodsPresentation productsArray={this.state.products} />
          </Col>
          <Col sm={4}>
            <ShoppingCart/>
          </Col>
        </Row>
      </Container>
      );
      
  }
}



export default Display;