const express = require("express");
require("dotenv").config();
const sequelize = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;

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
