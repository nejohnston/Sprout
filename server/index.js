
const cors = require('cors');
const express = require('express');

const pool = require('./server')

const app = express();
const port = 3001

// https://www.taniarascia.com/node-express-postgresql-heroku/
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors());
const getUser = (body) => {
// https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
  const { username, password } = body  
    pool.query(
      `SELECT * FROM application_user;`, 
      (error, results) => {
        // https://www.taniarascia.com/node-express-postgresql-heroku/
        if (error) throw error;
        console.log(response.status(200).json(results.rows))
        response.status(200).json(results.rows);
      }
      )
    };

    // app.route('/login')
    // .get(getUser);

// app.post('/merchants', (req, res) => {
//   user_model.createMerchant(req.body)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

// app.delete('/merchants/:id', (req, res) => {
//   user_model.deleteMerchant(req.params.id)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})