const {Router} = require('express')
const router = Router();
const {Country,Activity} = require('../db')
//Ruta de Post para la actividad
router.post('/activity',async(req,res)=>{
    let { name, difficulty, season, pais } = req.body;
    let actividad = await Activity.create ({
        name_a       :   name, 
        difficulty  :   difficulty, 
        season      :   season,
    })
    actividad.setCountries(pais)
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
    let {count, row} = await Activity.findAndCountAll();
    console.log(count)
    res.send(all_activities);
})

module.exports= router 