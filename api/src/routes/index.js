const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Countries_r = require('./countries_r')

const router = Router();

router.use('/countries',Countries_r)

router.use('/activity',(req,res)=>{
    res.send('Aun queda hacer la carga de actividades')
})

module.exports = router;
