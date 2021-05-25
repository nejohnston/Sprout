const express = require('express');
const cors = require('cors');
const path = require('path');
const rootRouter = express.Router();
const {
  getUser,
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
  getPlantInfo
} = require('./pgHelper');
const {
  response
} = require('express');
const port = 3001;
let app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use(express.json())
// Serve static files from the React app
// Code copied from here, Answer 1
// https://stackoverflow.com/questions/44684461/how-to-serve-reactjs-static-files-with-expressjs
const buildPath = path.normalize(path.join(__dirname, '../client/build'));
app.use(express.static(buildPath));

// ====================================
//           EXPRESS QUERIES
// ====================================

// GET USER DATA
/**
 * @params username, password
 * return a user's data.
 * @returns - response from database.
 */
app.get('/login/:username/:password', async (request, response) => {
  let user = await getUser(request.params.username, request.params.password);
  
  if(user.length > 0) {
    response.json(user);
  }
  response.redirect('/signup');
});

let signup = []
app.post('/signup', async (req, res) => {
  signup.push(req.body.username);
  signup.push(req.body.password);
  res.json(signup);
  res.redirect('/join-team');
})

app.post('/join-team', async (req, res) => {
  console.log(req.body);
})

// UPDATE USER PROFILE
/**
 * returns response with user's Information
 */
app.put('/profile', async (req, res) => {
  // console.log(req.body);
  let param = {
    id: req.body.userId,
    imageUrl: req.body.profilePic,
    userPrefName: req.body.newUserPrefName
  }
  console.log(param);
  await updateUserProfile(param);
  let userInfo = await getUserById(req.body.userId);
  res.json(userInfo);
})

// GET USER SPROUTS
/**
 * @params userId
 * get a user's sprouts.
 * @returns - sprouts of user.
 */
app.get('/sprouts/:userId', async (request, response) => {
  let userSprouts = await getUserSprouts(request.params.userId);
  response.json(userSprouts)
});

// POST NEW USER SPROUT
/**
 * @params sprout json object
 * create new user sprout.
 * @returns - success or fail message.
 */
app.post('/profile/', async (request, response) => {
  await createSprout(request.body)
  response.status(200).send(`200: Sprout added successfully.`);
  // response.status(500).send(`500: server.js could not handle response.`);
})

app.post('/alerts', async (req, res) => {
  let alerts = await getAlert(req.body.userId);
  res.json(alerts);
  // let alerts = await getAlert
})

app.delete('/alerts', async (req, res) => {
  console.log(req);
})

// Code copied from here, Answer 1
// https://stackoverflow.com/questions/44684461/how-to-serve-reactjs-static-files-with-expressjs
/* 
 * all other routes go here
 */
rootRouter.get('(/*)?', async (req, res, next) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});
app.use(rootRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// UPDATE EXISTING USER SPROUT
/**
 * Updates the information of a user's sprout submitted from EditPlant Component.
 */
app.put('/plant-profile', async (req, res) => {
  let param = {
    id: req.body.sproutId,
    name: req.body.name,
    family: req.body.family,
    type: req.body.type,
    wateringInterval: req.body.wateringInterval,
    notes: req.body.notes,
    imageUrl: req.body.imageUrl
  }
  await updateSprout(param);
  let updatedSprout = await getSproutById(req.body.sproutId);
  res.json(updatedSprout)
})