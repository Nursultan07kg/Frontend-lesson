import React from 'react';
import {Row} from "react-bootstrap";
import ProductItem from "./ProductItem";

class ProductsList extends React.Component {
  render() {
    return (
      <Row>
        {this.props.data.map((v) => {
          return <ProductItem item={v} />;
        })}
      </Row>
    );
  }
}

export default ProductsList;
