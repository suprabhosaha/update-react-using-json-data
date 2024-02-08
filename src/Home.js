import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {

    axios.get("/data.json").then((res) => {

      setBooks(res.data.books);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center">List of Books</h1>
      <br />
      <Row xs={1} md={2} className="g-4">
        {books &&
          books.map((book, id) => (
            <Col key={id}>

              <Card key={id}>
                
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;