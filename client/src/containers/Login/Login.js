import React, {useState} from "react";
import { ErrorMessage, Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { isNull } from "lodash-es";
import { Redirect } from "react-router";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const Login = ({ loginError }, props) => {
  const [isValidCredentials, setIsValidCredentials] = useState(true);
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
              // console.log(isValidCredentials)
                // console.log(response.json())
                // let responseBody = response.json()
                // console.log(responseBody)
                // return responseBody
              
              )
              .then(data => {
                typeof data === Boolean ? setIsValidCredentials(false) : null
                &&
                // setIsValidCredentials(false)
                console.log(isValidCredentials)
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
            {!isValidCredentials ? 
            <ErrorMessage>That's an incorrect username or password, please try again.</ErrorMessage> : null
          }
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
