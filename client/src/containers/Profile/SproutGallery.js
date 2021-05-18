import React from "react";
import SproutItem from "./SproutItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./styles/SproutGallery.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SproutGallery = ({ sprouts }) => {
  return (
    <Container fluid>
      <Row id="sprout-gallery-container">
        <SproutItem sprouts={sprouts} />
      </Row>
    </Container>
  );
};

export default SproutGallery;
