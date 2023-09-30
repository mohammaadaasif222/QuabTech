import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import JobScreen from "./JobScreen";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

const HomeScreen = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const jobs = [1, 2, 3];

  useEffect(() => {}, [dispatch]);

  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Row className="d-flex">
      <Col md={8} className="m-auto">
        <Form
          className="d-flex"
          style={{ width: "100%" }}
          onSubmit={formHandler}
        >
          <Form.Control
            type="search"
            placeholder="Enter job title..."
            className="me-2 "
            aria-label="Search"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </Form>
      </Col>
    </Row>
  );
};

export default HomeScreen;
