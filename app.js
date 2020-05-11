/* eslint-disable */
const express = require('express');
const path = require('path');
const fs = require('fs');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {

  console.log(`App listening at http://localhost:${PORT}`);

});


const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

/**

/**
 * Метод получения json данных, исползующий Promise
 */
const getTodoPromise = () => {
  const todoPath = path.join(__dirname, 'todo.json');

  return fs.promises
      .readFile(todoPath, { encoding: 'utf8' })
      .then((data) => JSON.parse(data));
}

/**

/**
 * Получение конкретного todo с Promise нотацией
 */
app.get('/todo/:id', (req, res) => {
  getTodoPromise()
    .then((todos) => {
      const todo = todos.find(item => item.id === req.params.id);

      if(!todo) {
        return res.send({
          error: "Нет такого todo"
        })
      }

      res.send(todo);
    })
})

app.listen(port);
