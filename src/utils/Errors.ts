export class GeneralError extends Error {

  protected statusCode: number = 500;

  constructor(message: string) {
    super();
    this.message = message;
    Object.setPrototypeOf(this, GeneralError.prototype);
  }

  getCode() {
    return this.statusCode;
  }
}

export class BadRequest extends GeneralError {
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}

export class NotFound extends GeneralError {
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}

export class Unauthorized extends GeneralError {
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
  }
}

export class Forbidden extends GeneralError {
  constructor(message: string) {
    super(message);
    this.statusCode = 403;
  }
}
