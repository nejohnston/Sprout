// =====================================
//               IMPORTS
// =====================================

// React
import React, { useState } from "react";

// Axios
import Axios from "axios";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./Signup.css";
import { ErrorMessage } from "formik";

// ====================================
//           REACT COMPONENT
// ====================================

const Signup = () => {
  // Form States
  const [inputUsername, setUsername] = useState("");
  const [inputPassword, setPassword] = useState("");

  // Validation Username existence
  const [userExistValidation, setUserExistValidation] = useState(true);

  // Post to /signup
  const sendAccountInfo = () => {
    Axios.post("/signup", {
      username: inputUsername,
      password: inputPassword,
    })
    .then((res) => {
      if (res.data != "Username exists") {
        window.sessionStorage.setItem("userName", res.data[0]);
        setUserExistValidation(true);
        window.location = "/join-team";
      } else {
        setUserExistValidation(false);
      }})
  };

  return (
    <div id="login-container">
      <div id="signup-bg">
        <div id="login-card">
          <Form>
            <h3>Sign Up</h3>
            <hr />
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="new_user_name"
                defaultValue={inputUsername}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="new_user_password"
                defaultValue={inputPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>


            {!userExistValidation && (
                <div
                style={{ color: "red", marginBottom: "0.25rem" }}>
                Username already exists.
              </div>
              )}

            <Button
              variant="primary"
              type="button"
              className="custom-primary-button"
              onClick={sendAccountInfo}
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
