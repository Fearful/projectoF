var express = require('express');
var router = express.Router();
var users = require('../controllers/users');
var session = require('../controllers/session');
var auth = require('../config/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ProyectoF' });
});
router.post('/auth/users', users.create);
router.get('/auth/users/:userId', users.show);

// Check if username is available
// todo: probably should be a query on users
router.get('/auth/check_username/:username', users.exists);

// Session Routes
router.get('/auth/session', auth.ensureAuthenticated, session.session);
router.post('/auth/session', session.login);
router.delete('/auth/session', session.logout);

module.exports = router;
