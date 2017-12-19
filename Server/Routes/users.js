const express = require('express');
const addUser = require('../Model/users');
const addUserInfo = require('../Model/userInfo');
const addUserAddress = require('../Model/userAddress');

const router = express.Router();

router.route('/form1')
  .post((req, res) => {
    const { username, password, email } = req.body;
    addUser({ username, password, email })
    .then(id => res.json({ id }) )
    .catch(err => res.send(err) );
  });

router.route('/form2')
  .post((req, res) => {
    const { user_id, first_name, last_name, phone_number } = req.body;
    addUserInfo({ user_id, first_name, last_name, phone_number })
    .then(id => res.json({ id }) )
    .catch(err => res.send(err) );
  });

router.route('/form3')
  .post((req, res) => {
    const { user_id, address, city, state, zip } = req.body;
    addUserAddress({ user_id, address, city, state, zip })
    .then(id => res.json({ id }) )
    .catch(err => res.send(err) );
  });

module.exports = router;
