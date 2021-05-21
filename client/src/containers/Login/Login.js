import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { UserContext } from "../../components/Layout/Layout.js";
import { withRouter } from "react-router";

// Splash Screen
import Splash from "../../Splash";

// Styles
import "./Login.css";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const Login = (props) => {
  const [splash, setSplash] = useState(true); //splash screen will always render upon initialization
  const user = useContext(UserContext)[0]
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [validation, setValidation] = useState(true)

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000); //after 2 seconds the state will be switched to false
  }, []);
  
  return (
    <>
    {splash === false ? (
    <div id="login-container">
      <div id="bg">
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
            (values) => {
              fetch(`http://localhost:3001/login/${values.username}/${values.password}`)
              .then(response => response.json()
              )
              .then(data => {
                user.userId = data.application_user_id
                user.username = data.application_user_username
                user.name = data.application_user_preferred_name
                user.points = data.application_user_points
                user.team = data.team_id
                user.profilePicture = data.application_user_image
              })
              .then (props.history.push('/profile'))
              .catch(err => console.log(err) && setValidation(false));
            }
          }
          initialValues={
            {
            username: '',
            password: ''
          }
        }
          >
            {
            ({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
          }) => (
          <Form onSubmit={handleSubmit}>
            <h3>Login or Signup</h3>
            <hr />
            <Form.Group controlId="validationFormik01">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                isValid={validation}
              />
            </Form.Group>

            <Form.Group controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={validation}
              />
            </Form.Group>
            {!validation ? 
            <ErrorMessage>That's an incorrect username or password, please try again.</ErrorMessage> : null
          }
            <Button 
            variant="primary" 
            type="submit"
            className="custom-primary-button">
              Login or Signup
            </Button>
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
