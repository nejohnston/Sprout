const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const getUser = (username, password) => {
  return new Promise((resolve, reject) => {

    client.query(
      `SELECT * FROM application_user WHERE username = ${username} AND password = ${password};`, 
      (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    });
  })
}

module.exports = {
  getUser
};