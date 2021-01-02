const express = require('express');
const { NotExtended } = require('http-errors');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('set-cookie', [
    'name1=hoge1; Domain=55a91ba25382.ngrok.io; SameSite=None; Secure; HttpOnly',
  ]);

  res.render('index', {
     title: 'Express5-1',
     cookie: `${req.headers.cookie}`,
     host: `${req.headers.host}`
  });
});

module.exports = router;
