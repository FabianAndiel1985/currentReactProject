import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {giveAction} from './giveAction';

class GoodsPresentation extends React.Component {
	
  constructor(props){
    super(props);  
    }

    componentDidMount() {
    }

   
  render() {

   const Data = this.props.productsArray != undefined ? this.props.productsArray.map(
      (item,index)=>{
        return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td>{item.image}</td>
          <td><button onClick={this.props.giveAction}>add to cart</button></td>
        </tr>
       )           
       }  
    )
    :null
;

    return (

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id </th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
            <th>img</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {Data}
        </tbody>
      </Table>
      );
      
  }
}

// GoodsPresentation.propTypes = {
//   productsArray: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     price: PropTypes.number,
//     description: PropTypes.string,
//     img:PropTypes.string
//   })
// };

let mapDispatchToProps= {
  giveAction  

}


// let mapDispatchToProps = { 
// 	increment:increment,
// 	decrement:decrement
// }



const GoodsPresentation2 = connect(
 null, mapDispatchToProps)(GoodsPresentation);

export default GoodsPresentation2;