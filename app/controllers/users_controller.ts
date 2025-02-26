import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import BadRequestException from '#exceptions/bad_request_exception'
import { createUserValidator } from '#validators/create_user'

export default class UsersController {
  public async store({ request, response }: HttpContext) {
    const userPayload = await request.validateUsing(createUserValidator)

    const userByUsername = await User.findBy('username', userPayload.username)
    const userByEmail = await User.findBy('email', userPayload.email)

    if (userByEmail) throw new BadRequestException('email already in use', { status: 409 })
    if (userByUsername) throw new BadRequestException('username already in use', { status: 409 })

    const newUser = await User.create(userPayload)

    return response.created(newUser)
  }
}
