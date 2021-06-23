const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries_r = require('./countries_r')
const Activity_r = require('./activity_r')
const router = Router();

//Ruta Activity
router.use(Countries_r)
//Ruta Activity
router.use(Activity_r)



module.exports = router;
