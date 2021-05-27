import React, { useContext, useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { UserContext, SproutContext } from "../../components/Layout/Layout.js";
import { withRouter } from "react-router";

// Splash Screen
import Splash from "../../Splash";

// Styles
import "./Login.css";

Axios.defaults.withCredentials = true;

const schema = yup.object().shape({
  // REGEX statement copied from this article
  // https://stackoverflow.com/questions/1221985/how-to-validate-a-user-name-with-regex
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = (props) => {
  const [splash, setSplash] = useState(true); //splash screen will always render upon initialization
  const [validation, setValidation] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000); //after 2 seconds the state will be switched to false
  }, []);

  return (
    <>
      {splash === false ? (
        <div id="login-container">
          <div id="login-bg">
            <div id="login-card">
              <Formik
                validationSchema={schema}
                onSubmit={
                  // QUERY USER DATA
                  /**
                   * @params username, password
                   * Return a user's data.
                   * @returns - components of Profile Page.
                   */
                  async (values) => {
                    Axios.post('/login', {
                      userName: values.username,
                      password: values.password
                    })
                    .then(res => {
                      if (res.data == "User not found") {
                        window.location = "/signup"
                      }
                      else if (res.data == "Failed"){
                        setValidation(false)
                      }
                      else {
                        window.sessionStorage.setItem('userId', res.data.application_user_id);
                        window.location = '/profile'
                      }
                    })
                }}
                initialValues={{
                  username: "",
                  password: "",
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    <h3>SPROUT LOGIN</h3>
                    <hr />
                    <Form.Group controlId="validationFormik01">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="validationFormik02"
                      style={
                        (errors.username && touched.username) ||
                        (errors.password && touched.password)
                          ? { marginBottom: 0 }
                          : null
                      }
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        style={{ marginBottom: "0.25rem" }}
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    {!validation ? (
                      <ErrorMessage>
                        {() => (
                          <div
                            style={{ color: "red", marginBottom: "0.25rem" }}
                          >
                            Incorrect username or password.
                          </div>
                        )}
                      </ErrorMessage>
                    ) : null}
                    <Button
                      variant="primary"
                      type="submit"
                      className="custom-primary-button"
                    >
                      Login
                    </Button>
                    <br />
                    <Link to="/signup">
                      <p id="login-signup-link">Create an Account</p>
                    </Link>
                  </Form>
                )}
              </Formik>
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

export default withRouter(Login);
