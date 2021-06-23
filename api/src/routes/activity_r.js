const { Router } = require('express');
const router = Router();
const activity_controllers = require('../controllers/Activity_controllers')

//Unica ruta para utilizar de los controllers de activity
router.use(activity_controllers)

module.exports= router