import React, { useContext, useState, useEffect } from "react";
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

const schema = yup.object().shape({
  // REGEX statement copied from this article
  // https://stackoverflow.com/questions/1221985/how-to-validate-a-user-name-with-regex
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = (props) => {
  const [splash, setSplash] = useState(true); //splash screen will always render upon initialization
  const user = useContext(UserContext)[0];
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [validation, setValidation] = useState(true);
  const [sprouts, setSprouts] = useContext(SproutContext);

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
                    let response = await fetch(
                      `/api/login/${values.username}/${values.password}`
                    );
                    let textResponse = await response.text();
                    try {
                      let userData = JSON.parse(textResponse);
                      // let userSproutsResponse = await fetch(`http://localhost:3001/sprouts/${user.userId}`)
                      setValidation(true);
                      user.userId = userData.application_user_id;
                      user.profilePicture = userData.application_user_image;
                      user.username = userData.application_user_username;
                      user.name = userData.application_user_preferred_name;
                      user.points = userData.application_user_points;
                      user.team = userData.team_id;
                      user.profilePicture = userData.application_user_image;
                      let userSprouts = 
                      await fetch(`/api/sprouts/${user.userId}`)
                      .then(response => response.json())
                      .catch(error => console.log(error))
                      if (userSprouts !== []) {
                        await userSprouts.forEach((element) => {
                        sprouts.push({
                          sproutId: element.user_sprouts_id,
                          imageUrl: element.user_sprouts_image,
                          name: element.user_sprouts_given_name,
                          type: element.user_sprouts_type,
                          family: element.user_sprouts_family,
                          wateringInterval:
                            element.user_sprouts_watering_intervals,
                          notes: element.user_sprouts_notes,
                          isWatered: element.user_sprouts_is_watered,
                          dateAdded: element.user_sprouts_date_added,
                          lastWatered: element.user_sprouts_last_watered,
                          nextAlert: element.user_sprouts_next_alert_date,
                        });
                      });}
                      window.sessionStorage.setItem('userId', user.userId);
                      window.sessionStorage.setItem('userName', user.username);
                      window.sessionStorage.setItem('userPrefName', user.name);
                      window.sessionStorage.setItem('teamId', user.team);
                      props.history.push("/profile");
                    } catch {
                      setValidation(false);
                      throw Error("Incorrect username or password.");
                    }
                    // let userSproutsResponse = await fetch(`http://localhost:3001/sprouts/${user.userId}`)
                    // let userSproutsJson = await response.json()
                      // console.log(userSproutsResponse)
                      // if (userSproutsJson.length > 0) {
                      //   userSproutsResponse.forEach((element) => {
                      //   sprouts.push({
                      //     sproutId: element.user_sprouts_id,
                      //     image_url: element.user_sprouts_image,
                      //     name: element.user_sprouts_given_name,
                      //     type: element.user_sprouts_type,
                      //     family: element.user_sprouts_family,
                      //     wateringInterval:
                      //       element.user_sprouts_watering_intervals,
                      //     notes: element.user_sprouts_notes,
                      //     isWatered: element.user_sprouts_is_watered,
                      //     dateAdded: element.user_sprouts_date_added,
                      //     lastWatered: element.user_sprouts_last_watered,
                      //     nextAlert: element.user_sprouts_next_alert_date,
                      //   });
                      // });
                  // }
                
                  props.history.push("/profile");
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
                      {/* {
               errors.username && touched.username ? (
               setValidation(false)
                )
                : 
                setValidation(true)
                } */}
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
                        type="text"
                        placeholder="Enter Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                      />
                      {/* {
              errors.username && touched.username ? (
               setValidation(false)
               ) 
               : 
               setValidation(true)} */}
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
