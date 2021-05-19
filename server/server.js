const express = require('express');
const cors = require('cors');
const { getUsers, createSprout } = require('./pghelper');
const port = 3001;
let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("../client/build"));
    app.use(cors());
    app.use(express.json())
app.get('/login/:username/:password', async (req, res) => {
  let users = await getUsers(req.params.username, req.params.password);
  res.json(users)
});

app.get('/sprouts/:userId', async (req, res) => {
  let userSprouts = await getUserSprouts(req.params.userId);
  res.json(userSprouts)
});

app.post('/profile/', async (req, res) => {
  let addSprout = await createSprout(req.body)
  // res.json(addSprout)
  console.log(req.body.wateringInterval)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})