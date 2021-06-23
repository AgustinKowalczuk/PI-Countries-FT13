const {Router} = require('express')
const router = Router();
const {Country,Activity} = require('../db')
const { v4: uuidv4 } = require('uuid');
//Ruta de Post para la actividad
router.post('/activity',async(req,res)=>{
    let { name, difficulty, season, pais } = req.body;
    let id = uuidv4();
    let actividad = await Activity.create ({
        id_a        :   id,
        name_a       :   name, 
        difficulty  :   difficulty, 
        season      :   season,
    })
    pais.forEach(async (paises) => {
        let country = await Country.findOne({
            where: { id3Code: paises }
        })
        await actividad.addCountry(country)
    });
    res.status(201).send('Actividad correctamente!')
});

//Muestra de las actividades
router.get('/activities',async(req,res)=>{
    let { name } = req.query;
    if(name){
        console.log(name)
        name = name.split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(" ");
        let country_with_activity = await Country.findAll({
            include:{
                model:Activity,
                where:{
                    name_a:name
                },
                require:true
            }
        });
        console.log(country_with_activity)
        return country_with_activity ? res.json(country_with_activity) : res.sendStatus(404);
    }
    let all_activities = await Activity.findAll();

    res.send(all_activities);
})

module.exports= router 