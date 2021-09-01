import axios from 'axios';
export const ASD = 'Razas-A-Z';
export const DES = 'Razas-Z-A';
export const HASD = 'HABITANTES_ASD';
export const HDES = 'HABITANTES_DES';
const URL = 'http://localhost:3001'


export function getCountries() {
    return (dispatch) => {
        return fetch(`${URL}/countries`).then(info => info.json())
            .then(json => {
                dispatch({ type: "GET_COUNTRIES", payload: json })
            })
    }
}

export function getCountry(name) {
    return (dispatch) => {
        return fetch(`${URL}/countries?name=${name}`).then(info => info.json())
        .then(json => {
            dispatch({ type: "GET_COUNTRY", payload: json })
        })
    }
}

export function getCountryDetail(id3Code) {
    return (dispatch) => {
        return fetch(`${URL}/countries/${id3Code}`).then(info => info.json())
        .then(json => {
            dispatch({ type: "GET_COUNTRY_DETAIL", payload: json })
        })
    }
}

export function getActivities() {
    return (dispatch) => {
        return fetch(`${URL}/activities`).then(info => info.json())
            .then(json => {
                dispatch({ type: "GET_ACTIVITIES", payload: json })
            })
    }
}

export function postActivity(data) {
    // console.log('------------')
    // console.log(data);
    // console.log('------------')
    return (dispatch) => {
        return axios.post(`${URL}/activity`, data)
            .then(response => {
                console.log(data)
                console.log("response: ")
                console.log(response)
                console.log("Done!")
                dispatch({ type: "POST_ACTIVITY", payload: response })
            })
    }
}

export function changeCountries(name) {
    return function (dispatch) {
        return fetch(`${URL}/activities?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "CHANGE_COUNTRIES", payload: json })
            })
    }
}

export function filtro_reg(region){
    return (dispatch)=>{
        return fetch(`${URL}/countries?region=${region}`).then(info=> info.json())
        .then(json=>{
            dispatch({type: "GET_COUNTRY", payload:json})
        })
    }
}

export function order_abc(orden, oCountries) {
    let countries = [...oCountries]

    countries.sort((a, b) => {

        var nombreA = a.name.toUpperCase()
        var nombreB = b.name.toUpperCase()

        if (orden === ASD) {
            return nombreA < nombreB ? -1: nombreA > nombreB ? 1 : 0;
        }
        if (orden === DES) {
            return nombreA > nombreB ? -1: nombreA < nombreB ? 1 : 0;
        }
    })
    return function (dispatch) {
        dispatch({ type: "ORDER_ABC", payload: countries })
    }
}

export function order_population(orden, oPopulation) {
    let population = [...oPopulation]

    population.sort(function (a, b) {

        var poblacionA = parseFloat(a.population)
        var poblacionB = parseFloat(b.population)



        if (orden === HASD) {
            return poblacionA < poblacionB ? -1: poblacionA > poblacionB ? 1 : 0;
        }
        if (orden === HDES) {
            return poblacionA > poblacionB ? -1: poblacionA < poblacionB ? 1 : 0;
        }
    })
    return function (dispatch){
        dispatch({type:"ORDER_POPULATION", payload: population})
    }
}