const express = require("express");
const cors = require("cors");
const path = require("path");
const rootRouter = express.Router();
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
  updateSproutIsWatered,
  updateSproutWateringInterval,
  getAlert,
  deleteAlert,
  getPlantInfo,
  getTopFiveUsers,
  getTeamPoints
} = require("./pgHelper");
const { response } = require("express");
const { sign } = require("crypto");
const port = 3001;
let app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
// Serve static files from the React app
// Code copied from here, Answer 1
// https://stackoverflow.com/questions/44684461/how-to-serve-reactjs-static-files-with-expressjs
const buildPath = path.normalize(path.join(__dirname, "../client/build"));
app.use(express.static(buildPath));

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
app.get("/login/:username/:password", async (request, response) => {
  let user = await getUser(request.params.username, request.params.password);
  console.log(user);

  // if (user.length > 0) {
    response.json(user);
  // }
  // response.redirect("/signup");
});


// ==========================================
//               SIGNUP
// ==========================================
// Post user's username and password from /signup
let signup = [];
app.post("/signup", async (req, res) => {
  signup = [];
  signup.push(req.body.username);
  signup.push(req.body.password);
  let existUser = await checkUserExist(req.body.username);
  if (existUser.length === 0) {
    res.json(signup);
    res.redirect("/join-team");
  } else if (existUser.length > 0) {
    res.json("Username exists")
  }
});

// Insert the new user into DB on post to /join-team
app.post("/join-team", async (req, res) => {
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
  res.redirect("/");
});



// ==========================================
//               PROFILE
// ==========================================

// UPDATE USER PROFILE
/**
 * returns response with user's Information
 */
app.put("/profile", async (req, res) => {
  // console.log(req.body);
  let param = {
    id: req.body.userId,
    imageUrl: req.body.profilePic,
    userPrefName: req.body.newUserPrefName,
  };
  console.log(param);
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
app.get("/sprouts/:userId", async (request, response) => {
  let userSprouts = await getUserSprouts(request.params.userId);
  response.json(userSprouts);
});

// POST NEW USER SPROUT
/**
 * @params sprout json object
 * create new user sprout.
 * @returns - success or fail message.
 */
 app.post("/profile/", async (req, res) => {
  console.log("THIS IS", req.body);

  let param = {
    userId: req.body.userId,
    name: req.body.name,
    type: req.body.type,
    family: req.body.family,
    wateringInterval: req.body.wateringInterval,
    notes: req.body.notes,
    imageUrl: req.body.imageUrl,
  };
  console.log(param);
  await createSprout(param);
  let newUserSprouts = await getUserSprouts(req.body.userId);
  // res.status(200).send(`200: Sprout added successfully.`);
  res.json(newUserSprouts);
  // res.redirect("/profile/");
  // response.status(500).send(`500: server.js could not handle response.`);
});


// ==========================================
//               PLANT PROFILE
// ==========================================
// UPDATE EXISTING USER SPROUT
/**
 * Updates the information of a user's sprout submitted from EditPlant Component.
 */
 app.put("/plant-profile", async (req, res) => {
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
app.put("/plant-profile/:sproutId", async (req, res) => {
  let param = {
    userId: req.body.userId,
    userSproutsId: req.params.sproutId
  }
  await deleteAlert(param)
})


// DELETE USER SPROUT
/**
 * @params userId
 * @params sproutId
 * delete user sprout.
 * @returns - success or fail message.
 */
 app.delete("/sprouts/:userId/:sproutId", (request, response) => {
  deleteSprout(request.params.userId, request.params.sproutId);
  response.status(200).send(`200: Sprout deleted successfully.`)
})



// ==========================================
//               ALERTS
// ==========================================

// Initial get : Alerts from DB
app.post("/alerts", async (req, res) => {
  let alerts = await getAlert(req.body.userId);
  res.json(alerts);
  // let alerts = await getAlert
});

// Deleting Alerts
app.put("/alerts", async (req, res) => {
  let param = {
    userId: req.body.userId,
    userSproutsId: req.body.user_sprouts_id
  }
  await deleteAlert(param)
  let alerts = await getAlert(req.body.userId);
  res.json(alerts);
});



// ==========================================
//               LEADERBOARD
// ==========================================

// Initial get : Top Five Sprout Leaders
app.get("/leaderboards-topFive", async (req, res) => {
  let topFiveUsers = await getTopFiveUsers();
  res.json(topFiveUsers);
})

// Initial get :
app.get("/leaderboards-team-points", async (req, res) => {
  let teamPoints = await getTeamPoints();
  res.json(teamPoints);
})



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

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
