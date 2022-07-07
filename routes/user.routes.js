const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged', { name: req.user._json.name, picture: req.user._json.picture });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    if(req.user) {
        res.render('profile');
    } else {
        res.render('noPermission')
    }
});

router.get('/profile/settings', (req, res) => {
    if(req.user) {
        res.render('settings');
    } else {
        res.render('noPermission')
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.render('logout');
});

module.exports = router;