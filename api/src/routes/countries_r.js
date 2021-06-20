const { Router } = require('express');
const { carga } = require('../controllers/Countries_all')
const router = Router();
const axios = require('axios')
const { Country } = require('../db')


router.get('/', async (req, res) => {
    
    let {name}= req.query
    if(name){
        let pais_nombre= () =>{return axios.get(`https://restcountries.eu/rest/v2/name/${name}`)}
        Promise.all([pais_nombre()])
        .then(info=> {
            let countrie = info[0].data.map((pais) => {
                let { alpha3Code, name, capital, region, subregion,flag } = pais; 
                let obj_pais={
                    id: alpha3Code,
                    name:name,
                    continent: region,
                    capital: capital,
                    subregion: subregion,
                    flag: flag,
                }
                return obj_pais;
            })
            res.send(countrie)
        })
        .catch(error=> console.error(error))
    }else{
    //traer los paises de la api

    let paises = () => {
        return axios.get('https://restcountries.eu/rest/v2/all')
    }
    //Meterlos en una Base de Dato, solo los datos requeridos
    await Promise.all([paises()])
        .then(x => {
            //Preparo el empaquetado
            let countrie = x[0].data.map((pais) => {
                let { alpha3Code, name, capital, region, subregion,flag } = pais; 
                let obj_pais={
                    id: alpha3Code,
                    name:name,
                    continent: region,
                    capital: capital,
                    subregion: subregion,
                    flag: flag,
                }
                return obj_pais;
            })
            return countrie
        })
        .then(paises => {
            for (const info of paises){
                Country.findOrCreate({where: info})
            }
            let countrie = Country.findAll()
            Promise.all([countrie]).then(db => res.json(db[0]))
        })
        .catch(fallo => console.error(fallo))
    }
    //Traer un listado de los primeros 10 países 
});

router.get('/agu', carga)

module.exports = router




/* let countrie = x[0].data.map(pais => ({
    id:pais.alpha3Code,
    name:pais.name,
    population: pais.population,
    continent: pais.region,
    capital: pais.capital,
    subregion: pais.subregion,
}))
let resp = await Country.findOrCreate({
    where:{
        countrie
    }
}) */