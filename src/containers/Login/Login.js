import {React, useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Splash from '../../Splash'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = ({ loginError }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
    {loading === false ? (
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
