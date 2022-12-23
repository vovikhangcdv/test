var express = require('express');
var router = express.Router();
const secret = process.env.SECRET;
const FLAG = process.env.FLAG;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/2023', function(req, res, next) {
  res.render('2023', { title: 'Express' });
});

module.exports = router;
