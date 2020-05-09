# **sprint-12-mesto**

My first project in backend development. Creating server with API, node.js, express.js. 

## v0.0.1 version 

[**link to this project on github pages**](https://leannalight.github.io/sprint-12-mesto/)

In this project I learned to work with Express and Node.js.

## Technologies used in the project:
Node.js,
Express.js.
HTML,
CSS,
Git

## Instructions on how to deploy the project
1. For cloning, use git clone https://github.com/leannalight/sprint-12-mesto
2. Use npm i to reinstall packages.
3. Use npm run dev to open the project on the local server.
4. The npm run start command starts the server on localhost: 3000;
5. The npm run dev command starts the server on localhost: 3000 with hot reload;
6. In response to a GET request localhost: 3000 / users, the server will return a JSON object from the users.json file;
7. In response to a GET request localhost: 3000 / cards, the server will return a JSON object from the cards.json file;
8. In response to a GET request localhost: 3000 / users / 8340d0ec33270a25f2413b69, the server will return the user JSON object with the identifier passed after / users;
9. If there is no user with the requested identifier, the API should return 404 response status and JSON: {"message": "There is no user with this id"};
10. When requesting a non-existent address, the API should return 404 response status and JSON: {"message": "The requested resource was not found"}.


## Инструкция по установке:
1. Для клонирования используйте git clone https://github.com/leannalight/sprint-12-mesto
2. Для переустановки пакетов используйте npm i.
3. Для открытия проекта на локальном сервере используйте npm run dev.
4. Команда npm run start запускает сервер на localhost:3000;
5. Команда npm run dev запускает сервер на localhost:3000 с хот релоудом;
6. В ответ на запрос GET localhost:3000/users сервер вернёт JSON-объект из файла users.json;
7. В ответ на запрос GET localhost:3000/cards сервер вернёт JSON-объект из файла cards.json;
8. В ответ на запрос GET localhost:3000/users/8340d0ec33270a25f2413b69, сервер вернёт JSON-объект пользователя с переданным после /users идентификатором;
9. Если пользователя с запрошенным идентификатором нет, API должен возвращать 404 статус ответа и JSON: { "message": "Нет пользователя с таким id" };
10. При запросе на несуществующий адрес, API должен возвращать 404 статус ответа и JSON: { "message": "Запрашиваемый ресурс не найден" }.
