class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
  //Плохой запрос от пользователя
  static badRequest(message) {
    return new ApiError(404, message);
  }

  //Внутренняя ошибка(на сервере)
  static internal(message) {
    return new ApiError(500, message);
  }

  //Запрет доступа
  static forbidden(message) {
    return new ApiError(403, message);
  }
}

module.exports = ApiError;
