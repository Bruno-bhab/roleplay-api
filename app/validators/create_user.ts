import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
    password: vine.string().trim().minLength(4),
    email: vine.string().trim().email(),
  })
)
