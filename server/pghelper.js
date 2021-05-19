const { response } = require('express');
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

let getUserSprouts = async (username) => {
  const query = {
    text: 
    'SELECT * FROM user_sprouts WHERE application_user_id=$1;',
    values: [username]
  }
return (
  await client
.query(query)
.then(res => res.rows[0])
.catch(err => console.log(err)))
}

let createSprout = async (sprout) => {
  console.log("waterInterval" + sprout.userId)
  const query = {
    text: 
      `INSERT INTO USER_SPROUTS(
        application_user_id, 
        user_sprouts_given_name,
        user_sprouts_type,
        user_sprouts_family,
        user_sprouts_watering_intervals,
        user_sprouts_notes
      ) VALUES (
        $1, $2, $3, $4, $5, $6)`,
    values: [
      sprout.userId,
      sprout.name, 
      sprout.type,
      sprout.family,
      sprout.wateringInterval,
      sprout.notes,
      // sprout.image
    ]
  }
return (
  await client
.query(query)
.then(res => res.send('Sprout Added Successfully'))
.catch(err => console.log(err)))
}

let deleteSprout = async (sprout) => {
  const query = {
    text: 
      `
      DELETE FROM USER_SPROUTS WHERE
      application_user_id=$1 
      AND 
      user_sprouts_given_name=$2
      `,
    values: [
      sprout.userId,
      sprout.name
    ]
  }
return (
  await client
.query(query)
.then(res => console.log(res))
.catch(err => console.log(err)))
}

module.exports = {
  createSprout,
  getUsers
}