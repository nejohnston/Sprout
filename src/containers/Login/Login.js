// =====================================
//               IMPORTS
// =====================================

// React
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Splash Screen
import Splash from "../../Splash";

// Styles
import "./Login.css";

/**
 * Return the Login screen, which is its own component
 * 
 * @param {*} loginError - 
 * @returns the Login screen
 */

const Login = ({ loginError }) => {
  const [splash, setSplash] = useState(true); //splash screen will always render upon initialization

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000); //after 2 seconds the state will be switched to false
  }, []);

  return (
    <>
      {splash === false ? (
        <div id="login-container">
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
                <Link to="/join-team">
                  <Button
                    variant="primary"
                    type="submit"
                    className="custom-primary-button"
                  >
                    Login or Signup
                  </Button>
                </Link>
              </Form>
            </div>
          </div>
          <Link to="/about-us" id="about-us-link">
            <p>About the Sprout Team</p>
          </Link>
        </div>
      ) : (
        <Splash />
      )}
    </>
  );
};

export default Login;
