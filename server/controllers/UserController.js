class UserController {
  async registration(request, response) {}
  async login(request, response) {}
  async check(request, response) {
    response.json(`Проверка  что работает`);
  }
}

module.exports = new UserController();
