
const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')


/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoutes)

/**
 * @description Add users
 * @method GET /add-user
 */
route.get('/add-user',services.add_user)

/**
 * @description Update users
 * @method GET /update-user
 */

route.get('/update-user',services.update_user)


// API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

// signup users
route.get('/api/registeredUser',controller.createuser)

module.exports = route