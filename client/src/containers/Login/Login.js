import React, {useContext } from "react";
import { Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { UserContext } from "../../index";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})
// import { isNull } from "lodash-es";
// import { Redirect } from "react-router";

// const schema = yup.object().shape({
//   username: yup.string().required(),
//   password: yup.string().required()
// })

const Login = (props) => {
  const user = useContext(UserContext)[0]
  const setUser = useContext(UserContext)[1]
  // console.log(setUser)
  console.log(user)
  return (
    <>
      <div id="bg">
        <div id="login-card">
          <Formik
          validationSchema={schema}
          onSubmit={
            async (values) => {
              await fetch(`http://localhost:3001/login/${values.username}/${values.password}`)
              .then(response => response.json()
              )
              .then(data => {
                user.userId = data.application_user_id
                user.username = data.application_user_username
                user.password = data.application_user_password
                user.name = data.application_user_preferred_name
                user.points = data.application_user_points
                user.team = data.team_id
              })
              .catch(err => console.log(err));
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
                isValid={touched.username && !errors.username}
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
                isValid={touched.password && !errors.password}
              />
            </Form.Group>
            {/* {!isValidCredentials ? 
            <ErrorMessage>That's an incorrect username or password, please try again.</ErrorMessage> : null
          } */}
            <Button 
            variant="primary" 
            type="submit">
              Login or Signup
            </Button>
          </Form>
          )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
