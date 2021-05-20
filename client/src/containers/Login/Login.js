import React, { useContext, useReducer } from "react";
import { Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { UserContext } from "../../index";
import { withRouter } from "react-router";
// import { queryUser } from "../../api/apiQueries";
import reducer from '../../components/Layout/GlobalReducer'

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const initialState = {
  user: {
  userId: 0,
  teamId: 0,
  username: '',
  password: '',
  name: '',
  profilePicture:'',
  team: 0,
  points: 0,
  sprouts: []
}
}
// userId: 0,
// teamId: 0,
// username: '',
// password: '',
// name: '',
// profilePicture:'',
// team: 0,
// points: 0,
// sprouts: []
const Login = (props) => {
  // const setUser = useContext(UserContext)[1]
  // const user = useContext(UserContext)[0]
  const [user, setUser] = useContext(UserContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const queryUser = async (values) => {
    await fetch(`http://localhost:3001/login/${values.username}/${values.password}`)
    .then(response => response.json())
    .then(data => {
      user.username = data.application_user_username,
      user.password = data.application_user_password,
      user.name = data.application_user_name,
      user.
    }
      )
    .catch(err => console.log(err));
  }
  return (
    <>
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
            async (values) => {
              console.log(values)
              // dispatch()
              let userResponse = await queryUser(values)
              console.log("userResponse: " + userResponse)
              setUser(userResponse)
              // NEED VALIDATION HERE ?
              &&
              // redirect to profile
              props.history.push('/profile')}
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

export default withRouter(Login);
