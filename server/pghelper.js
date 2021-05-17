const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
console.log(process.env.DATABASE_URL);
console.log('not connected')
client.connect();
console.log('connected')
let getUsers = async (username, password) => {
  return (
    await client
  .query(
    `SELECT * FROM application_user 
      WHERE username=${username} AND password=${password};`
          )
  .then(res => res.rows[0])
  .catch(err => console.log(err))
  )
}
module.exports = {
  getUsers
}