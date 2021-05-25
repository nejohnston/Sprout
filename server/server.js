const express = require('express');
const cors = require('cors');
const path = require('path');
const rootRouter = express.Router();
const { 
  getUser,
  createUser,
  updateUserPic,
  getUserSprouts,
  createSprout,
  deleteSprout,
  updateSproutIsWatered,
  updateSproutWateringInterval,
  getAlert,
  deleteAlert,
  getPlantInfo } = require('./pgHelper');

const port = 3001;
let app = express();
    app.use(express.urlencoded({extended: true}));
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
  response.json(user)
});

app.put('/profile', async (req, res) => {
  // console.log(req.body);
let param = {
  id: req.body.userName,
  image: req.body.profilePic
}
  await updateUserPic(param);
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
  console.log(request.body)
  response.status(200).send(`200: Sprout added successfully.`);
  // response.status(500).send(`500: server.js could not handle response.`);
})

// DELETE USER SPROUT
/**
 * @params sprout json object
 * create new user sprout.
 * @returns - success or fail message.
 */
app.delete('/api/deleteSprout/:userId/:sproutId', async (request, response) => {
  await deleteSprout(request.params.userId, request.params.sproutId);
  response.status(200).send(`200: Sprout deleted successfully.`);
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