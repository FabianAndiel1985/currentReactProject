import React from "react";
import Table from "react-bootstrap/Table";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const ProductCard = (props) => {
  const header = (
    <img
      alt="Card"
      src="showcase/demo/images/usercard.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span>
      <Button
        onClick={props.removeFunction.removeProductFromCart}
        label="Remove from cart"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div>
      <Card
        title={props.product.name}
        style={{ width: "25em" }}
        className="ui-card-shadow"
        footer={footer}
        header={header}
      >
        <Table>
          <thead></thead>
          <tbody>
            <tr>
              <th>Number</th>
              <td>{props.product.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{props.product.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{props.product.description}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td></td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{props.product.price}</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
