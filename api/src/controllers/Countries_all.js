const axios = require('axios');
const {Country,Activity} = require('../db')
const {Sequelize} = require('sequelize')

function carga (req,res){
    let charger_inf = ()=> {return axios.get(`https://restcountries.eu/rest/v2/all`)}
    let db_charg = Country.findAll( {include: Activity});
    Promise.all([charger_inf(),db_charg])
    .then(i => {
        let {inf_1,inf_2} = i;
        res.send(inf_1)
    })
}

module.exports = {
    carga
}