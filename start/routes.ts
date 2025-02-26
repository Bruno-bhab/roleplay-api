import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.post('/users', [UsersController, 'store'])
