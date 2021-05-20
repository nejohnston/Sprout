const express = require('express');
const cors = require('cors');
const { getUser, createSprout, getUserSprouts } = require('./pghelper');
const port = 3001;
let app = express();
    app.use(express.urlencoded({extended: true}));
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
app.get('/login/:username/:password', async (request, response) => {
  let user = await getUser(request.params.username, request.params.password);
  response.json(user)
});

// GET USER SPROUTS
/**
 * @params userId
 * get a user's sprouts.
 * @returns - sprouts of user.
 */
app.get('/sprouts/:userId', async (request, response) => {
  console.log(request.params.userId)
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

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})