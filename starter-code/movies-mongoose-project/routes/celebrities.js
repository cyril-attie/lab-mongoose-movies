const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  console.log(Celebrity.find())
  .then(celebrities => {
      console.log(celebrities)
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
 });



module.exports = router;

