const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const getUsersAsyncAwait = async () => {
  const usersPath = path.join(__dirname, '../data/users.json');

  try {
    const data = await fs.promises
        .readFile(usersPath, { encoding: 'utf8'})

    return JSON.parse(data);
  } catch (error) {
      return res.status(500).json({
        message: 'Запрашиваемый файл не найден'
      });
  }
}

router.get('/users', async (req, res) => {
  const users = await getUsersAsyncAwait();

  res.status(200).json(users);
});

router.get('/users/:_id', async (req, res) => {

  const users = await getUsersAsyncAwait();
  const userFind = users.find(item => item._id === req.params._id);
      if(!userFind) {
        return res.status(404).json({
          message: 'Нет пользователя с таким id'
        })
      }
      res.status(200).json(userFind);
});

module.exports = router;

