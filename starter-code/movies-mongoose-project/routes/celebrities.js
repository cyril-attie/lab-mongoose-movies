const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-movies-project', {useNewUrlParser: true})
  

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find().then(found=>console.log(found))
  res.render('index');

});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}) 
  .then((celebrities) => {
      console.log(celebrities)
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
 });

router.get('/celebrity/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(celebrityId)) { 
    return res.status(404).render('not-found');
  }
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      if (!celebrity) {
          return res.status(404).render('not-found');
      }
      res.render("celebrities/show", { celebrity })
    })
    .catch(next)
});




module.exports = router;

