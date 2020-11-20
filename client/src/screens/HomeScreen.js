import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  /*
    useEffect() is where you run async tasks in react hooks
    2nd argument is the configuration of useEffect()

    setting "proxy" in ./client/package.json to port :5000 
    so that axios can make request to localhost:5000/api/products
    and able to avoid cors error
  */
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
