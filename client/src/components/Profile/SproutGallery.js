// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./styles/SproutGallery.css";

// =====================================
//          REACT COMPONENT
// =====================================

import SproutItem from "./SproutItem";

/**
 * Return the parent container of the user's sprouts (Sprout Items)
 * @param {Array} sprouts - an array of objects containing the user's plant (sprout) information
 * @returns the parent container of the user's sprouts (Sprout Items)
 */

const SproutGallery = ({ sprouts }) => {
  return (
    <Container fluid>
      <Row id="sprout-gallery-container">
        <SproutItem sprouts={sprouts}  />
      </Row>
    </Container>
  );
};

export default SproutGallery;
