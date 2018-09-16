const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


const dbtitle = 'mongoose-movies-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useNewUrlParser:true});
Celebrity.collection.drop();


const celebrities = [
  {
    name: "Bob Marley",
    occupation: 'singer',
    catchPhrase: "One love"
  },
  {
    name: "Steve Jobs",
    occupation: 'entrepreuneur',
    catchPhrase: "Be different"
  },
  {
    name: "Richard Stallman",
    occupation: 'hacker',
    catchPhrase: "Free like free speech, not like free beer"
  }
]

Celebrity.create(celebrities)
.then(celebrities=>mongoose.connection.close())
.catch(e => console.log(e))