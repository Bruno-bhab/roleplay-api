import { UserFactory } from '#database/factories/user_factory'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('User', (group) => {
  const userPayload = {
    email: 'test@test.com',
    username: 'test',
    password: 'test123',
    avatar: 'https://images.com/image/1',
  }

  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('it should create an user', async ({ client, assert }) => {
    const response = await client.post('/users').json(userPayload)
    const { password, avatar, ...expected } = userPayload
    response.assertCreated()
    response.assertBodyContains(expected)
    assert.notExists(response.body().password, 'Password defined')
  })

  test('it should return 409 when email is already in use', async ({ client, assert }) => {
    const { email } = await UserFactory.create()
    const localPayload = { ...userPayload }
    localPayload.email = email
    const response = await client.post('/users').json(localPayload)

    response.assertConflict()
    assert.include(response.body().message, 'email')
    assert.equal(response.body().code, 'BAD_REQUEST')
    assert.equal(response.body().status, 409)
  })

  test('it should return 409 when username is already in use', async ({ client, assert }) => {
    const { username } = await UserFactory.create()
    const localPayload = { ...userPayload }
    localPayload.username = username

    const response = await client.post('/users').json(localPayload)
    response.assertConflict()
    assert.include(response.body().message, 'username')
    assert.equal(response.body().code, 'BAD_REQUEST')
    assert.equal(response.body().status, 409)
  })

  test('it should return 422 when required data is not provided', async ({ client, assert }) => {
    const response = await client.post('/users').json({})
    response.assertUnprocessableEntity()
    assert.equal(response.body().code, 'BAD_REQUEST')
    assert.equal(response.body().status, 422)
  })

  test('it should return 422 when an invalid password is provided', async ({ client, assert }) => {
    const localPayload = { ...userPayload }
    localPayload.password = '123'

    const response = await client.post('/users').json(localPayload)
    response.assertUnprocessableEntity()
    assert.equal(response.body().code, 'BAD_REQUEST')
    assert.equal(response.body().status, 422)
    assert.equal(response.body().errors[0].field, 'password')
  })

  test('it should return 422 when an invalid email is provided', async ({ client, assert }) => {
    const localPayload = { ...userPayload }
    localPayload.email = '123'

    const response = await client.post('/users').json(localPayload)
    response.assertUnprocessableEntity()
    assert.equal(response.body().code, 'BAD_REQUEST')
    assert.equal(response.body().status, 422)
    assert.equal(response.body().errors[0].field, 'email')
  })
})
