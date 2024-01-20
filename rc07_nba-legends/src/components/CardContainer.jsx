import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  console.log("Data:", data);

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50  m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Container className="card-container rounded-4 my-4 p-3">
        <Row>
          {data
            .filter((player) =>
              player.name
                .toLocaleLowerCase()
                .includes(search.trim().toLocaleLowerCase())
            )
            .map((player, i) => (
              <Col md={6} lg={4} xl={3} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
