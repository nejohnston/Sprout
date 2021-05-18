const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
console.log('not connected')
client.connect();
console.log('connected')

let getUsers = async (username, password) => {
    const query = {
      text: 
      'SELECT * FROM application_user WHERE application_user_username=$1 AND application_user_password=$2;',
      values: [username, password]
    }
  return (
    await client
  .query(query)
  .then(res => res.rows[0])
  .catch(err => console.log(err)))
}
console.log(getUsers().then(response => console.log(response)))
module.exports = {
  getUsers
}