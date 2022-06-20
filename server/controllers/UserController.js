const ApiError = require("../error/ApiError");

class UserController {
  async registration(request, response) {}

  async login(request, response) {}

  async check(request, response, next) {
    const { id } = request.query;
    if (!id) {
      return next(
        ApiError.badRequest(
          "У пользователя отсутствует уникальный инденификатор. Обратитесь к Администратору"
        )
      );
    } else {
      // так как это query параметр то путь home-appliances-store/user/auth?id=5 позже удали
      return response.json(id);
    }
  }
}

module.exports = new UserController();
