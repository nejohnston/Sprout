const express = require('express');
const cors = require('cors');
const { getUsers } = require('../../../../server/pghelper');
const port = 3001;
let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("client/build"));
    app.use(cors());

app.get('/login', (req, res) => {
  console.log('get / login')
  getUsers();
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})