const uuid = require("uuid");
const path = require("path");

const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(request, response, next) {
    try {
      let { name, price, brandId, typeId, info } = request.body;
      const { img } = request.files; // npm i express-fileupload
      let fileName = uuid.v4() + ".jpg"; //генерирую уникальное имя файла, npm i uuid
      //Указываю куда складывать файлы
      //Так не забываю указать в корневом index.js что дирректория static должна быть статической
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      //Возвращаю на клиент
      return response.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(request, response) {}

  async getOne(request, response) {}
}

module.exports = new DeviceController();
