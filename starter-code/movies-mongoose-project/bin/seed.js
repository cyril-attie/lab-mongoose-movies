const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
mongoose.connect(`mongodb://localhost/'mongoose-movies-project'`, {useNewUrlParser:true});
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
.then(celebrities=>{
  console.log("succesfully created ", celebrities.length, "celebrities")
  mongoose.connection.close()
})
.catch(e => console.log(e))

