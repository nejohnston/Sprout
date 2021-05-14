// require('dotenv').config();
// const Client = require('pg').Client;
// console.log(process.env.REACT_APP_DATABASE_URL)
// const client = new Client({
//   connectionString: process.env.REACT_APP_DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// // client.connect();
// console.log('connected')
// const getUsers = async function(resolve, reject) {
//     // console.log(client)
//     await client
//     .query('SELECT * FROM application_user;', (err, res) => {
//       if (err) throw err;
      
//       for (let row of res.rows) {
//         console.log(JSON.stringify(row));
//       }});
//   };
// // client.end();
// module.exports = {
//   getUsers
// }

// // const { Client } = require('pg')
// // const client = new Client({
// //   connectionString: process.env.DATABASE_URL,
// //   ssl: {
// //     rejectUnauthorized: false
// //   }
// // })
// // client.connect(err => {
// //   if (err) {
// //     console.error('connection error', err.stack)
// //   } else {
// //     console.log('connected')
// //   }
// // })
const Pool = require('pg').Pool;
const pool = new Pool({  
  host: 'ec2-35-170-85-206.compute-1.amazonaws.com',  
  user: 'sshovcjpdbiske',  
  database: 'daama3hr9d0osj',  
  password: 'cfa4366c3ca29896322ecbd08a53592f6ad794280dffd387466954d7a40956f8',
  port: 5432,
  ssl:true
});

pool.query('select * from application_user').then(d => console.log(d)).catch(e => console.log(e))