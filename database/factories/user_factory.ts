import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      username: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.url(),
    }
  })
  .build()
