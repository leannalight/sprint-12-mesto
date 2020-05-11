/* eslint-disable */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

//const users = require('../data/users');
const users = () => {
  const usersPath = path.join(__dirname, 'users.json');

  return fs.promises
      .readFile(usersPath, { encoding: 'utf8'})
      .then((data) => JSON.parse(data));
}

router.get('/users', (req, res) => {
  res.status(200).json(users);
});

router.all('/users/:_id', (req, res) => {
const userReq = req.params._id;
const userFind = users.find((m) => m._id === userReq);
if (userFind) {
  res.status(200).json(userFind);
} else {
  res.status(404).json({ message: 'Нет пользователя с таким id' })
}
});

module.exports = router;


