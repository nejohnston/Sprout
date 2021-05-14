const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

console.log('not connected')
client.connect();
console.log('connected')
let getUsers = (username, password) => {
  console.log(username, password)
  client
  .query(`SELECT * FROM application_user WHERE application_user_username = '${username}' AND application_user_password = '${password}';`)
  .then(res => {res.rows ? res.rows : 'The username or password you entered is incorrect.'})
  .catch(err => console.log(err));}
module.exports = {
  getUsers
}