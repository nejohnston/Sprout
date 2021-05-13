require('dotenv').config();
const Client = require('pg').Client;
console.log(process.env.REACT_APP_DATABASE_URL)
const client = new Client({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// client.connect();
console.log('connected')
const getUsers = async function(resolve, reject) {
    // console.log(client)
    await client
    .query('SELECT * FROM application_user;', (err, res) => {
      if (err) throw err;
      
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }});
  };
// client.end();
module.exports = {
  getUsers
}

// const { Client } = require('pg')
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// })
// client.connect(err => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })