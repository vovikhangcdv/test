var express = require('express');
var router = express.Router();
require('dotenv').config();
const SECRET = process.env.SECRET;
const REPO = process.env.REPO;

router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/credit', function(req, res, next) {
  const fs = require('fs');
  const usernames = fs.readFileSync('credits.txt', 'utf8').split('\n');
  const users = {};
  usernames.forEach(function(username) {
    if (username ) users[username] = 1 + (users[username] || 0);
  });
  const leaderboard = Object.keys(users).sort(function(a, b) { return users[b] - users[a] });
  res.render('credit', { users: users, leaderboard: leaderboard, repo: REPO});
});

router.post('/credit', function(req, res, next) {
  if (!req.body.username || !req.body.secret || req.body.secret !== SECRET) {
    res.send('Invalid username or secret');
    return;
  }
  const username = req.body.username.toString();
  const fs = require('fs');
  fs.appendFileSync('credits.txt', username + "\n");
  res.send('Credited!');
});

module.exports = router;
