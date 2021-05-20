const express = require('express');
const cors = require('cors');
const { getUsers, createSprout, getUserSprouts } = require('./pghelper');
const port = 3001;
let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("../client/build"));
    app.use(cors());
    app.use(express.json())
    
// ====================================
//           EXPRESS QUERIES
// ====================================

// GET USER DATA
/**
 * @params username, password
 * return a user's data.
 * @returns - response from database.
 */
app.get('/login/:username/:password', async (req, res) => {
  let user = await getUsers(req.params.username, req.params.password);
  res.json(user)
});

// GET USER SPROUTS
/**
 * @params userId
 * get a user's sprouts.
 * @returns - sprouts of user.
 */
app.get('/sprouts/:userId', async (req, res) => {
  console.log(req.params.userId)
  let userSprouts = await getUserSprouts(req.params.userId);
  res.json(userSprouts)
});

// POST NEW USER SPROUT
/**
 * @params sprout json object
 * create new user sprout.
 * @returns - success or fail message.
 */
app.post('/profile/', async (req, res) => {
  let addSprout = await createSprout(req.body)
  console.log(req.body.wateringInterval)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})