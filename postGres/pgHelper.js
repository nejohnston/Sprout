const {
  Client
} = require('pg');
require('dotenv').config();

// ====================================
//           DATABASE QUERIES
// ====================================

// heroku postgres database credentials
// create new Client object with credentials
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// connect to postgres database using client credentials in const client
client.connect();

// GET USER
/**
 * @params username, password
 * return a user's data.
 * @returns - user object.
 */
let getUser = async (user) => {
  const query = {
    text: `SELECT application_user.application_user_id, team_id, application_user_username,
      application_user_preferred_name, application_user_points, application_user_image
      FROM application_user
      WHERE LOWER(application_user_username) = $1 
      AND convert_from(decrypt(decode(application_user_password,'hex'),'ENC_KEY','aes'),'utf8') = $2;`,
    values: [user.userName.toLowerCase(), user.password]
  }
  return (
    await client
    .query(query)
    .then(res => res.rows[0])
    .catch(err => console.log(err)))
}

let checkUserExist = async (userName) => {
  const query = {
    text: `SELECT * FROM APPLICATION_USER WHERE LOWER(APPLICATION_USER_USERNAME) = $1`,
    values: [userName.toLowerCase()]
  }
  return (
    await client
    .query(query)
    .then(res => res.rows)
    .catch(err => console.log(err))
  )
}

// GET USER BY ID
/**
 * @params userId
 * get a user's information by id
 * @returns - user's information by user Id.
 */
let getUserById = async (userId) => {
  const query = {
    text: 'SELECT * FROM application_user WHERE application_user_id=$1;',
    values: [userId]
  }
  return (
    await client
    .query(query)
    .then(res => res.rows[0])
    .catch(err => console.log(err)))
}

// CREATE USER
let createUser = async (userInfo) => {
  const query = {
    text: "INSERT INTO application_user VALUES ((SELECT MAX(APPLICATION_USER_ID) + 1 FROM APPLICATION_USER), $1, $2, $3, $4, DEFAULT, DEFAULT);",
    values: [
      userInfo.userTeam,
      userInfo.userName,
      userInfo.userPassword,
      userInfo.userPreferredName
    ]
  }
  return (
    await client
    .query(query)
    .then(res => userInfo)
    .catch(err => console.log(err)))
}

// UPDATE USER PROFILE
/**
 * Update the user's profile with the given image URL and preferred name values
 * @param {Object} user - object contains the keys id, imageUrl, and userPrefName as assigned in index.js
 * @returns - none, queries and updates the user's profile based on given values 
 */
let updateUserProfile = async (user) => {
  const query = {
    text: "UPDATE APPLICATION_USER SET APPLICATION_USER_PREFERRED_NAME = $3, APPLICATION_USER_IMAGE = $2 WHERE APPLICATION_USER_ID = $1;",
    values: [
      user.id,
      user.imageUrl,
      user.userPrefName
    ]
  }
  return (
    await client
    .query(query)
    .then(res => console.log(res + 'User Profile Updated!'))
    .catch(err => console.log(err + 'User Profile Update Failed.')))
}

// GET USER SPROUTS
/**
 * @params userId
 * get a user's sprouts.
 * @returns - sprouts array.
 */
let getUserSprouts = async (userId) => {
  const query = {
    text: 'SELECT * FROM user_sprouts WHERE application_user_id=$1;',
    values: [userId]
  }
  return (
    await client
    .query(query)
    .then(res => res.rows)
    .catch(err => console.log(err)))
}

// CREATE USER SPROUT
/**
 * @params sprout
 * create a sprout.
 * @returns - success response.
 */
let createSprout = async (sprout) => {
  const query = {
    text: `INSERT INTO USER_SPROUTS VALUES ((SELECT MAX(USER_SPROUTS_ID) + 1 FROM USER_SPROUTS), $1, $2, $3, $4, $5, $6, '0', DEFAULT, DEFAULT, DEFAULT, $7);`,
    values: [
      sprout.userId,
      sprout.name,
      sprout.type,
      sprout.family,
      sprout.wateringInterval,
      sprout.notes,
      sprout.imageUrl
    ]
  }
  return (
    await client
    .query(query)
    .then(res => console.log(res))
    .catch(err => console.log(err)))
}

// UPDATE USER SPROUT
/**
 * Update a specific user sprout with the given sprout details.
 * @param {Object} sprout - new sprout props to be submitted to the database.
 * @returns - None, updates the database, will console log to confirm update.
 */
let updateSprout = async (sprout) => {
  const query = {
    text: `UPDATE USER_SPROUTS 
    SET user_sprouts_given_name = $2, user_sprouts_family = $3, user_sprouts_type = $4, user_sprouts_watering_intervals = $5, user_sprouts_notes = $6, user_sprouts_image = $7
    WHERE user_sprouts_id = $1;`,
    values: [
      sprout.id,
      sprout.name,
      sprout.family,
      sprout.type,
      sprout.wateringInterval,
      sprout.notes,
      sprout.imageUrl
    ]
  }
  return (
    await client
    .query(query)
    .then(res => console.log(res + 'Sprout Updated!'))
    .catch(err => console.log(err + 'Sprout Update Failed.')))
}

let getSproutById = async (sproutId) => {
  const query = {
    text: 'SELECT * FROM user_sprouts WHERE user_sprouts_id = $1;',
    values: [sproutId]
  }
  return (
    await client
    .query(query)
    .then(res => res.rows[0])
    .catch(err => console.log(err)))
}


// DELETE USER SPROUT
/**
 * @params userId, sprout's name
 * delete a user's sprouts.
 * @returns - success message.
 */
let deleteSprout = async (userId, sproutId) => {
  const queryDeleteUserSproutAlert = {
    text: `
    DELETE FROM 
    ALERTS
    WHERE 
    USER_SPROUTS_ID = (SELECT USER_SPROUTS.USER_SPROUTS_ID
      FROM USER_SPROUTS
      JOIN ALERTS
      ON USER_SPROUTS.USER_SPROUTS_ID = ALERTS.USER_SPROUTS_ID
      WHERE APPLICATION_USER_ID = $1
      AND ALERTS.USER_SPROUTS_ID = $2);
      `,
    values: [
      userId,
      sproutId
      ]
  }
  const queryDeleteUserSprout = {
    text: `
      DELETE FROM user_sprouts WHERE
      application_user_id=$1
      AND user_sprouts_id=$2;
      
      `,
    values: [
      userId,
      sproutId
      ]
  }
  await client
    .query(queryDeleteUserSproutAlert)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    await client
    .query(queryDeleteUserSprout)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// GET ALERT FOR EACH USER
let getAlert = async (userId) => {
  const query = {
    text: `SELECT alerts.user_sprouts_id, user_sprouts_image, user_sprouts_given_name
    FROM application_user
	    JOIN user_sprouts ON application_user.application_user_id = user_sprouts.application_user_id
	    JOIN alerts ON user_sprouts.user_sprouts_id = alerts.user_sprouts_id
    WHERE application_user.application_user_id = $1;`,
    values: [userId]
  }
  return (
    await client
    .query(query)
    .then(res => res.rows)
    .catch(err => console.log(err)))
}

// DELETE ALERT
let deleteAlert = async (sprout) => {
  const query = {
    text: `DELETE FROM ALERTS
    WHERE USER_SPROUTS_ID = (SELECT USER_SPROUTS.USER_SPROUTS_ID
                            FROM USER_SPROUTS
                            JOIN ALERTS
                            ON USER_SPROUTS.USER_SPROUTS_ID = ALERTS.USER_SPROUTS_ID
                            WHERE APPLICATION_USER_ID = $1
                            AND ALERTS.USER_SPROUTS_ID = $2);`,
    values: [
      sprout.userId,
      sprout.userSproutsId
    ]
  }
  return (
    await client
    .query(query)
    .then(res => console.log(res))
    .catch(err => console.log(err)))
}

// GET TOP 5 USERS
let getTopFiveUsers = async () => {
  const query = {
    text: `SELECT application_user_preferred_name, application_user_points, application_user_image
           FROM application_user
           ORDER BY application_user_points DESC, application_user_preferred_name
           LIMIT 5;`
  }
  return (
    await client
    .query(query)
    .then(res => res.rows)
    .catch(err => console.log(err))
  )
}

// GET TEAM POINTS
let getTeamPoints = async () => {
  const query = {
    text: `SELECT team_name, team_points, team_image_url
           FROM team
           ORDER BY team_points DESC;`
  }
  return (
    await client
    .query(query)
    .then(res => res.rows)
    .catch(err => console.log(err))
  )
}

// export modules
module.exports = {
  getUser,
  checkUserExist,
  createUser,
  updateUserProfile,
  getUserSprouts,
  createSprout,
  deleteSprout,
  updateSprout,
  getSproutById,
  getAlert,
  deleteAlert,
  getUserById,
  getTopFiveUsers,
  getTeamPoints
}