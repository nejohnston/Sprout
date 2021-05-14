const express = require('express');
const cors = require('cors');
const { getUsers } = require('./pghelper');
const port = 3001;
let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("../client/build"));
    app.use(cors());

app.get('/login/:username/:password', async (req, res) => {
  let users = await getUsers(req.params.username, req.params.password);
  res.json(
    users
    );
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})