  
// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./Signup.css";

const Signup = () => {
  return (
    <div id="login-container">
      <div id="bg">
        <div id="login-card">
          <Form>
            <h3>Sign Up</h3>
            <hr />
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="custom-primary-button"
              >
                Create a Sprout Account
              </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;