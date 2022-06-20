const express = require("express");
require("dotenv").config();
const cors = require("cors");

const sequelize = require("./db");
const models = require("./models/models");

const PORT = process.env.PORT || 5000;

const app = express();
//middleware
app.use(cors());
app.use(express.json());

//Проверяю что все работает
app.get("/", (request, response) => {
  try {
    response.status(200).json({ message: "Все прекрасно работает" });
  } catch (error) {
    response.status(500).json(error.message);
  }
});

const start = async () => {
  try {
    //Подключаюсь к БД
    await sequelize.authenticate();
    //Синхронизирую БД и модель данных
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Запущено на порту: ${PORT}`));
  } catch (error) {
    console.log(`Статус ошибки: ${error.status}`);
    console.log(`Сообщение об ошибке: ${error.message}`);
  }
};

start();
