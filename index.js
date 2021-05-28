const express = require("express");
const cors = require("cors");
const path = require("path");
const rootRouter = express.Router();
const session = require('express-session');
const {
  getUser,
  checkUserExist,
  getUserById,
  createUser,
  updateUserProfile,
  getUserSprouts,
  createSprout,
  deleteSprout,
  updateSprout,
  getSproutById,
  getAlert,
  deleteAlert,
  getTopFiveUsers,
  getTeamPoints,
} = require('./pgHelper');
let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
    app.use(express.json())
    // Serve static files from the React app
    // Code copied from here, Answer 1
    // https://stackoverflow.com/questions/44684461/how-to-serve-reactjs-static-files-with-expressjs
    const buildPath = path.normalize(path.join(__dirname, '/client/build'));
    app.use(express.static(buildPath));
app.use(
  session({
    secret: "WzTYezYhje",
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 60, //session expires in 1 hour
    },
  })
);
// ====================================
//           EXPRESS QUERIES
// ====================================

// ==========================================
//                 LOGIN
// ==========================================
// GET USER DATA
/**
 * @params username, password
 * return a user's data.
 * @returns - response from database.
 */

app.post("/api/login", async (req, res) => {
  let param = {
    userName: req.body.userName,
    password: req.body.password,
  };
  let user = await getUser(param);
  let userByName = await checkUserExist(param.userName);
  if (userByName === undefined) {
    res.json("User not found");
  }
  if (user === undefined && userByName) {
    res.json("Failed");
  } else {
    req.session.userId = user.application_user_id;
    res.json(user);
  }
});

// ==========================================
//               SIGNUP
// ==========================================
// Post user's username and password from /signup
let signup = [];
app.post("/api/signup", async (req, res) => {
  signup = [];
  signup.push(req.body.username);
  signup.push(req.body.password);
  let existUser = await checkUserExist(req.body.username);
  if (existUser.length === 0) {
    res.json(signup);
  } else if (existUser.length > 0) {
    res.json("Username exists");
  }
});

// Insert the new user into DB on post to /join-team
app.post("/api/join-team", async (req, res) => {
  signup.push(req.body.preferredName);
  signup.push(req.body.team);
  let userInfo = {
    userName: signup[0],
    userPassword: signup[1],
    userPreferredName: signup[2],
    userTeam: signup[3],
  };
  await createUser(userInfo);
  res.json(userInfo);
});

// ==========================================
//               PROFILE
// ==========================================

// UPDATE USER PROFILE
/**
 * returns response with user's Information
 */
app.put("/api/profile", async (req, res) => {
  let param = {
    id: req.body.userId,
    imageUrl: req.body.profilePic,
    userPrefName: req.body.newUserPrefName,
  };
  await updateUserProfile(param);
  let userInfo = await getUserById(req.body.userId);
  res.json(userInfo);
});

// GET USER SPROUTS
/**
 * @params userId
 * get a user's sprouts.
 * @returns - sprouts of user.
 */
app.get("/api/sprouts/:userId", async (request, response) => {
  let userSprouts = await getUserSprouts(request.params.userId);
  response.json(userSprouts);
});

// POST NEW USER SPROUT
/**
 * @params sprout json object
 * create new user sprout.
 * @returns - success or fail message.
 */
app.post("/api/profile/", async (req, res) => {
  let param = {
    userId: req.body.userId,
    name: req.body.name,
    type: req.body.type,
    family: req.body.family,
    wateringInterval: req.body.wateringInterval,
    notes: req.body.notes,
    imageUrl: req.body.imageUrl,
  };
  await createSprout(param);
  let newUserSprouts = await getUserSprouts(req.body.userId);
  res.json(newUserSprouts);
});

app.get("/api/profile/", async (req, res) => {
  let user = await getUserById(req.session.userId);
  let sprout = await getUserSprouts(req.session.userId);
  let result = {
    userId: user.application_user_id,
    team: user.team_id,
    username: user.application_user_username,
    name: user.application_user_preferred_name,
    profilePicture: user.application_user_image,
    points: user.application_user_points,
    sprouts: [],
  };
  sprout.forEach((value) => {
    result.sprouts.push({
      sproutId: value.user_sprouts_id,
      name: value.user_sprouts_given_name,
      family: value.user_sprouts_family,
      type: value.user_sprouts_type,
      wateringInterval: value.user_sprouts_watering_intervals,
      notes: value.user_sprouts_notes,
      imageUrl: value.user_sprouts_image,
      dateAdded: value.user_sprouts_date_added,
    });
  });
  res.json(result);
});

// ==========================================
//               PLANT PROFILE
// ==========================================
// UPDATE EXISTING USER SPROUT
/**
 * Updates the information of a user's sprout submitted from EditPlant Component.
 */
app.put("/api/plant-profile", async (req, res) => {
  let param = {
    id: req.body.sproutId,
    name: req.body.name,
    family: req.body.family,
    type: req.body.type,
    wateringInterval: req.body.wateringInterval,
    notes: req.body.notes,
    imageUrl: req.body.imageUrl,
  };
  await updateSprout(param);
  let updatedSprout = await getSproutById(req.body.sproutId);
  res.json(updatedSprout);
});

// WATER USER SPROUT
/**
 * @params userId
 * @params sproutId
 * water user sprout.
 * @returns - nothing
 */
 app.put("/api/plant-profile/:sproutId", async (req, res) => {
  let param = {
    userId: req.body.userId,
    userSproutsId: req.params.sproutId
  }
  await deleteAlert(param);
  let updatedSprout = await getSproutById(req.params.sproutId);
  res.json(updatedSprout);
})

// DELETE USER SPROUT
/**
 * @params userId
 * @params sproutId
 * delete user sprout.
 * @returns - success or fail message.
 */
app.delete("/api/sprouts/:userId/:sproutId", async (request, response) => {
  await deleteSprout(request.params.userId, request.params.sproutId);
  response.status(200).send(`200: Sprout deleted successfully.`);
});

// ==========================================
//               ALERTS
// ==========================================

// Initial get : Alerts from DB
app.post("/api/alerts", async (req, res) => {
  let alerts = await getAlert(req.body.userId);
  res.json(alerts);
  // let alerts = await getAlert
});

// Deleting Alerts
app.put("/api/alerts", async (req, res) => {
  let param = {
    userId: req.body.userId,
    userSproutsId: req.body.user_sprouts_id,
  };
  await deleteAlert(param);
  let alerts = await getAlert(req.body.userId);
  let updatedSprout = await getSproutById(req.body.user_sprouts_id);
  res.json({"alerts": alerts, "updatedSprout": updatedSprout});
});


// ==========================================
//               LEADERBOARD
// ==========================================

// Initial get : Top Five Sprout Leaders
app.get("/api/leaderboards-topFive", async (req, res) => {
  let topFiveUsers = await getTopFiveUsers();
  res.json(topFiveUsers);
});

// Initial get :
app.get("/api/leaderboards-team-points", async (req, res) => {
  let teamPoints = await getTeamPoints();
  res.json(teamPoints);
});

// ==========================================
//               ROOT ROUTER
// ==========================================
// Code copied from here, Answer 1
// https://stackoverflow.com/questions/44684461/how-to-serve-reactjs-static-files-with-expressjs
/*
 * all other routes go here
 */
rootRouter.get("(/*)?", async (req, res, next) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
app.use(rootRouter);
// app.use(express.static(path.join(__dirname, '/client/build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '/client/build/', 'index.html'));
// });

const port = process.env.PORT || 5000

app.listen(port, 
	() => console.log(`Server is listening on ${port}`));
