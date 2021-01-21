import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import {giveAction} from '../../../redux/actions';

class GoodsPresentation extends React.Component {
	
  constructor(props){
    super(props);  
    }

    componentDidMount() {
    }

    
  render() {

    //WHY DOesn`t it work when I put it there?  

  // const giveAction = ()=>{ 
  //   return  {type:"lalalal"}
  // }

   const Data = this.props.productsArray != undefined ? this.props.productsArray.map(
      (item,index)=>{
        return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td>{item.image}</td>
          <td><button onClick={ (e)=> {this.props.giveAction(e,item)}}>add to cart</button></td>
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


let mapDispatchToProps= {
  giveAction  
}


const GoodsPresentation2 = connect(
 null, mapDispatchToProps)(GoodsPresentation);

export default GoodsPresentation2;