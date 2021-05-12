import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = ({ loginError }) => {
  return (
    <>
      <div id="bg">
        <div id="login-card">
          <Form>
            <h3>Login or Signup</h3>
            <hr />
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login or Signup
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
