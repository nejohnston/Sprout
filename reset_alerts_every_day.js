const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 5432,
    host: process.env.HOST,
    ssl: { rejectUnauthorized: false }
});

client.connect()
.then(() => console.log("Connected"))
.catch(err => console.log(err));

client.query("TRUNCATE ALERTS RESTART IDENTITY;UPDATE USER_SPROUTS SET USER_SPROUTS_IS_WATERED = '0'", (err, res) => {
    if (!err) {
        console.log(res)
    }
    else {
        console.log(err)
    }
    client.end()
});