const { Client } = require('pg');
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

console.log('not connected')
// connect to postgres database using client credentials in const client
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
      `SELECT application_user.application_user_id, team_id, application_user_username,
      convert_from(decrypt(decode(application_user_password,'hex'),'ENC_KEY','aes'),'utf8') as application_user_password,
      application_user_preferred_name, application_user_points, application_user_image,
      user_sprouts_date_added, user_sprouts_family, user_sprouts_given_name, user_sprouts_id,
      user_sprouts_image, user_sprouts_is_watered, user_sprouts_last_watered,
      user_sprouts_next_alert_date, user_sprouts_notes, user_sprouts_type,
      user_sprouts_watering_intervals
      FROM application_user
      JOIN 
      (SELECT * FROM user_sprouts) AS user_sprouts_result
      ON user_sprouts_result.application_user_id = application_user.application_user_id
      WHERE application_user_username = $1 
      AND convert_from(decrypt(decode(application_user_password,'hex'),'ENC_KEY','aes'),'utf8') = $2;`,
      values: [username, password]
    }
  return (
    await client
  .query(query)
  .then(res => res.rows)
  .catch(err => console.log(err)))
}

// CREATE USER
let createUser = async (userInfo) => {
  const query = {
    text: 
    "INSERT INTO application_user VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT);",
    values:
    [
      userInfo.userTeam,
      userInfo.userName,
      userInfo.userPassword,
      userInfo.userPreferredName
    ]
  }
  return (
    await client
  .query(query)
  .then(res => res.send('User Added Successfully'))
  .catch(err => console.log(err)))
}

// UPDATE USER PROFILE PICTURE
let updateUserPic = async (user) => {
  console.log(user);
  const query = {
    text: 
    "UPDATE APPLICATION_USER SET APPLICATION_USER_IMAGE = $2 WHERE APPLICATION_USER_ID = $1;",
    values:
    [
      user.id,
      user.image
    ]
  }
  
  return (
    await client
  .query(query)
  .then(res => console.log(res))
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
  const query = {
    text: 
      `INSERT INTO USER_SPROUTS VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, '0', DEFAULT, DEFAULT, DEFAULT, DEFAULT);`,
    values: [
      sprout.userId,
      sprout.name, 
      sprout.type,
      sprout.family,
      sprout.wateringInterval,
      sprout.notes,
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
let deleteSprout = async (userId, sproutId) => {
  console.log("userId pghelper" + userId)
  console.log("userId pghelper" + sproutId)
  const query = {
    text: 
      `
      DELETE FROM USER_SPROUTS WHERE
      application_user_id=$1 
      AND user_sprouts_id=$2;
      `,
    values: [
      userId,
      sproutId
      ]
  }
return (
  await client
.query(query)
.then(res => console.log(res))
.catch(err => console.log(err)))
}

// UPDATE IS_WATERED
let updateSproutIsWatered = async (sprout) => {
  const query = {
    text:
    `UPDATE user_sprouts SET user_sprouts_is_watered = '1' 
    WHERE application_user_id=$1 
    AND user_sprouts_given_name=$2;`,
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

// UPDATE WATERING INTERVAL
let updateSproutWateringInterval = async (sprout) => {
  const query = {
    text:
    `UPDATE user_sprouts SET user_sprouts_watering_intervals = $1
    WHERE application_user_id = $2 
    AND user_sprouts_given_name = $3;`,
    values: [
      sprout.newWateringInterval,
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

// GET ALERT FOR EACH USER
let getAlert = async (userId) => {
  const query = {
    text:
    `
    SELECT ALERTS_MESSAGE
    FROM APPLICATION_USER
	    JOIN USER_SPROUTS ON APPLICATION_USER.APPLICATION_USER_ID = USER_SPROUTS.APPLICATION_USER_ID
	    JOIN ALERTS ON USER_SPROUTS.USER_SPROUTS_ID = ALERTS.USER_SPROUTS_ID
    WHERE APPLICATION_USER.APPLICATION_USER_ID = $1;
    `,
    values: [userId]
  }
  return (
    await client
  .query(query)
  .then(res => console.log(res))
  .catch(err => console.log(err)))
}

// DELETE ALERT
let deleteAlert = async (sprout) => {
  const query = {
    text:
    `DELETE FROM ALERTS
    WHERE USER_SPROUTS_ID = (SELECT USER_SPROUTS.USER_SPROUTS_ID
                            FROM USER_SPROUTS
                            JOIN ALERTS
                            ON USER_SPROUTS.USER_SPROUTS_ID = ALERTS.USER_SPROUTS_ID
                            WHERE APPLICATION_USER_ID = $1
                            AND USER_SPROUTS_GIVEN_NAME = $2);`,
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

// GET PLANT INFO
let getPlantInfo = async () => {
  const query = {
    text:
    `SELECT PLANT_COMMON_NAME, PLANT_FAMILY_NAME, PLANT_TYPE, PLANT_IMG_URL,
    PLANT_ORIGIN, PLANT_SOIL, PLANT_WATER_USE, PLANT_FLOWER_TIME_AT_PEAK, PLANT_FLOWER_COLOR,
    PLANT_FRUIT_TIME FROM PLANT;`,
  }
  return (
    await client
  .query(query)
  .then(res => console.log(res))
  .catch(err => console.log(err)))
}

// export modules
module.exports = {
  getUser,
  createUser,
  updateUserPic,
  getUserSprouts,
  createSprout,
  deleteSprout,
  updateSproutIsWatered,
  updateSproutWateringInterval,
  getAlert,
  deleteAlert,
  getPlantInfo
}