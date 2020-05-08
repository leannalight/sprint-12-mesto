/* eslint-disable */
const express = require("express");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use("/", usersRouter);
app.use("/", cardsRouter);

app.all('*', (req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {

  console.log(`App listening on port ${PORT}`);

});

