/* eslint-disable */
const router = require("express").Router();
const users = require("../data/users");

router.get("/users", (req, res) => {
  res.status(200).json(users);
});

router.all("/users/:_id", (req, res) => {
const userReq = req.params._id;
const userFind = users.find((m) => m._id === userReq);
if (userFind) {
  res.status(200).json(userFind);
} else {
  res.status(404).json({ "message": "Нет пользователя с таким id" })
}
});

module.exports = router;

