const { Router } = require('express');
const router = Router();
const { Op, where } = require("sequelize");
const { Country, Activity } = require('../db')
const axios = require('axios')


//Carga Por hook
router.use(async (req, res, next) => {
  const countries = await Country.count();
  if (!countries) {
      const apiResult = await axios.get(
          "https://restcountries.eu/rest/v2/all"
      );
      const array_country = apiResult.data.map((country) => ({
          id3Code: country.alpha3Code,
          name: country.name,
          flag: country.flag,
          region: country.region,
          capital: country.capital,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
      }));
      await Country.bulkCreate(array_country).then(c => console.log('Done!')).catch(err=> console.error(err))
  }
  next();
});

// Ruta principal
router.get('/', async (req, res) => {
  let countries;
  let { name } = req.query;
  // buscar pais por nombre
  if (name) {
    name = name.split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(" ");
    countries = await Country.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      include: { model: Activity, require: false }
    });
    return res.json(countries);
  }
  // Todos los paises 
  else {
    let countries = await Country.findAll({
      attributes: ["id3Code", "name", "flag", "population", "subregion"],
      include: { model: Activity, required: false }
    });
    return res.json(countries)
  }
});

//mostrar pais por id (codigo de 3 letras)
router.get('/:idCountry', (req, res) => {
  let idCountry = req.params.idCountry
  if (idCountry) {
    //idCountry no es afectado por minusculas
    idCountry = idCountry.toUpperCase();
    Country.findOne({
      where: {
        id3Code: idCountry
      },
      include: [
        {
          model: Activity,
        }
      ],
    })
      .then((idCountry) => {
        res.status(200).json(idCountry);
      })
      .catch((err) => {
        return res.status(400).send({ data: err });
      })
  }
})

module.exports = router;