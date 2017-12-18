const express = require('express');
const bodyParser = require('body-parser');

const Bookshelf = require('./db/config.js');
const Users = Bookshelf.Model.extend({
  tableName: 'Users'
});

const app = express();

app.use(bodyParser.json())

app.post('/users/form1', async function (req, res) {
  // try {
  //   const newUser = await new Users({
  //     Username: 'test',
  //     Password: 'test',
  //     Email: 'test@test.com'
  //   })
  //   console.log('here', newUser);
  //   const isSaved = await newUser.save();

  //   console.log('here', { isSaved });
    
  // } catch (err) {
  //   console.log(err);
  // }
  new Users({
    Username: 'test',
    Password: 'test',
    Email: 'test@test.com'
  })
  .save()
  .then((saved) => {
    res.json({ saved })
  })
})


const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});