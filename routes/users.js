/* eslint-disable */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const getUsersPromise = () => {
  const usersPath = path.join(__dirname, 'users.json');

  return fs.promises
      .readFile(usersPath, { encoding: 'utf8'})
      .then((data) => JSON.parse(data));
}

router.get('/users', (req, res) => {
  const users = getUsersPromise();

  res.status(200).json(users);
});

router.all('/users/:_id', (req, res) => {
  getUsersPromise()
    .then((users) => {
      const userFind = users.find(item => item._id === req.params._id);

      if(!userFind) {
        return res.status(404).json({
          message: 'Нет пользователя с таким id'
        })
      }
      res.status(200).json(userFind);
    })
  });

module.exports = router;

