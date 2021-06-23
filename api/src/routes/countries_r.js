const { Router } = require('express');
const router = Router();
const countries_controllers = require('../controllers/Countries_controllers')

//Unica ruta para utilizar de los controllers de countries
router.use('/countries',countries_controllers);

module.exports = router