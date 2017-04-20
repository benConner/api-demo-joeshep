'use strict';

const { Router } = require('express');
const router = Router();
router.use(require('./shows'));

router.get('/', function (req, res){
  res.json({
    "shows": "https://api-demo-ben-conner.herokuapp.com/api/v1/shows",
    "favorites": "https://api-demo-ben-conner.herokuapp.com/api/v1/shows/favorites?showId=<show_id>",
    "directors": "https://api-demo-ben-conner.herokuapp.com/api/v1/shows/directors?showId=<show_id>"
  })
})
module.exports = router;
