import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  console.log("Data:", data);

  return (
    <Container className="card-container rounded-4 my-4 p-3">
      <Row>
        {data.map((player, i) => (
          <Col md={6} lg={4} xl={3} key={i}>
            <PlayerCard {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardContainer;
