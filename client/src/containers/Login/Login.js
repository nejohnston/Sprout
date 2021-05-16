import React, {useState} from "react";
import { Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { isNull } from "lodash-es";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const Login = ({ loginError }) => {

  return (
    <>
      <div id="bg">
        <div id="login-card">
          <Formik
          validationSchema={schema}
          onSubmit={
            async (values) => {
              await fetch(`http://localhost:3001/login/${values.username}/${values.password}`)
              .then(response => {
                return response.text();
              })
              .then(data => {
                return (isNull(data) ? setUser(data[0]) : setNotValidated(true))
              })
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