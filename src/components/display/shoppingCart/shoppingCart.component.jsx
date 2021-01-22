import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductCard } from "./productCart/ProductCard.component";
import { removeProductFromCart } from "../../../redux/actions";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const Data =
      this.props.productsInCart != undefined
        ? this.props.productsInCart.map((item, index) => {
            return (
              <ProductCard
                product={item}
                key={item.id}
                removeFunction={this.props.removeProductFromCart}
              />
            );
          })
        : null;
    return <div>{Data}</div>;
  }
}

const mapStateToProps = (state) => {
  return { productsInCart: state };
};

// let mapDispatchToProps= {
//   giveAction
// }

const ShoppingCart2 = connect(mapStateToProps, { removeProductFromCart })(
  ShoppingCart
);

export default ShoppingCart2;
