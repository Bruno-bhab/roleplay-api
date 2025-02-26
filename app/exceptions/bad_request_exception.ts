import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export default class BadRequestException extends Exception {
  static status = 500
  static code = 'BAD_REQUEST'

  async handle(error: this, ctx: HttpContext) {
    const messageResponse = {
      code: error.code,
      message: error.message,
      status: error.status,
    }
    ctx.response.status(error.status).send(messageResponse)
  }
}
