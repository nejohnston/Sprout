const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
console.log(process.env.REACT_APP_DATABASE_URL)

client.connect();
console.log('connected')
let getUsers = async function(resolve, reject) {
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