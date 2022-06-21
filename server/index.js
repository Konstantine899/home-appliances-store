const express = require("express");
require("dotenv").config();
const cors = require("cors");
const fileUpLoad = require("express-fileupload");
const path = require("path");

const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const ErrorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static"))); // делаю дирректорию static статической
app.use(fileUpLoad({}));
app.use("/home-appliances-store", router);
//ErrorHandler всегда регистрирую последним в списке middleware
app.use(ErrorHandler);

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
