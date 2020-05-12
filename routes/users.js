const router = require('express').Router();
const path = require('path');
const fs = require('fs');

async function readUsersData() {
  const usersPath = path.join(__dirname, '../data/users.json');
  try {
    const data = await fs.promises
    .readFile(usersPath, { encoding: 'utf-8' });
  return JSON.parse(data);
  } catch (error) {
    return console.error(error);
  }
}

router.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  readUsersData().then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ message: 'Запрашиваемый файл не найден' })
    }
  });
});

router.get('/users/:_id', (req, res) => {
  readUsersData().then((data) => {
    const userFind = data.find(item => item._id === req.params._id);
      if(!userFind) {
        return res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).json(userFind);
    });
});

module.exports = router;


