import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

/*
  Redux action that will be fire off
*/
import { listProducts } from "../actions/productActions";

/*
  useDispatch() is used to dispatch (or call) a Redux action to Reducer
  useSelector() is used to select a part of the application state
*/
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  /*
    Dispatching an action to manipulate state in reducer
  */
  const dispatch = useDispatch();
  /*
    accessing the 'productList' part of the state in redux
  */
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
