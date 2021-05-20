const { Client } = require('pg');
require('dotenv').config();

// ====================================
//           DATABASE QUERIES
// ====================================

// heroku postgres database credentials
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

console.log('not connected')
// connect to postgres database
client.connect();
console.log('connected')

// GET USER
/**
 * @params username, password
 * return a user's data.
 * @returns - user object.
 */
let getUser = async (username, password) => {
    const query = {
      text: 
      'SELECT * FROM application_user WHERE application_user_username=$1 AND application_user_password=$2;',
      values: [username, password]
    }
  return (
    await client
  .query(query)
  .then(res => res.rows[0] && console.log(res.rows[0]))
  .catch(err => console.log(err)))
}

// GET USER SPROUTS
/**
 * @params userId
 * get a user's sprouts.
 * @returns - sprouts array.
 */
let getUserSprouts = async (userId) => {
  const query = {
    text: 
    'SELECT * FROM user_sprouts WHERE application_user_id=$1;',
    values: [userId]
  }
return (
  await client
.query(query)
.then(res => res.rows[0])
.catch(err => console.log(err)))
}

// CREATE USER SPROUT
/**
 * @params sprout
 * create a sprout.
 * @returns - success response.
 */
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

// DELETE USER SPROUT
/**
 * @params userId, sprout's name
 * delete a user's sprouts.
 * @returns - success message.
 */
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

// export modules
module.exports = {
  createSprout,
  getUser,
  getUserSprouts,
  deleteSprout
}