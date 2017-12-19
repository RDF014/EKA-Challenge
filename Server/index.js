const express = require('express');
const bodyParser = require('body-parser');

const Bookshelf = require('./db/config.js');

const app = express();

const userRouter = require('./Routes/users');

app.use(bodyParser.json());

app.use('/users', userRouter);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
