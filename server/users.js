var db = require('./pghelper');
//,
//    winston = require('winston');

/**
 * Get user profile
 * @param req
 * @param res
 * @param next
 */
function getUsers(req, res, next) {
    db.query(
        'SELECT id, name, email FROM users',
        [], false)
    .then(function (users) {
        res.send(JSON.stringify(users));
    })
    .catch(next);
};

/**
 * Insert user profile
 * @param req
 * @param res
 * @param next
 */
function postUser(req, res, next) {
    var user = req.body,
        name = user.name,
        email = user.email;
        
    db.query(
        'INSERT INTO users (name, email) VALUES ($1, $2)',
        [name, email], true)
    .then(function (data) {
      if (next){
        return next();
      }
    })
    .catch(next);
};

exports.getUsers = getUsers;
exports.postUser = postUser;