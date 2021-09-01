import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch,  } from 'react-redux';
import { postActivity, getCountries } from '../../Redux/Actions/Index';
import Nav from '../Navbar/Navbar';
import './Form_activity.css';

const Create_Activity = () => {
    const dispatch = useDispatch();
    // const id3Code = useSelector(state => state.id3Code)
    // const countries = useSelector(state => state.countries)
    const [city, setCity] = useState([])
    const [pais, setPais] = useState([])
    const [paises, setPaises] = useState([])
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        season: '',
    })
    const Filt = (array_countries) => {
        setPaises([]);
        let filteredCountries_ = array_countries;
        filteredCountries_ = filteredCountries_.filter(p => p.activities && p.activities.length > 0)
        setPaises(filteredCountries_)
    }

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleCountry = (event) => {
        event.preventDefault();
        const options = event.target.options;
        // console.log(options)
        const selections = [];
        for (let i = 0; i < options.length; i++) options[i].selected && selections.push(options[i].value);
        setPais(selections)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(Object.assign(form, { pais: pais })))
        event.target.reset();
        alert('Activity Created')
        setTimeout(() => { dispatch(getCountries()) }, 500)
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            Filt(paises)
            setLoading(false)
        }, 1500)
    }, [load])

    useEffect(() => {
        const fetch_Data = async () => {
            setLoading(true);

            const info = await axios.get('http://localhost:3001/countries')

            setCity(info.data);
            setLoading(false);
        };
        fetch_Data();
    }, []);

    return (
        <div>
            <div id='Nav_in_form'>
                <Nav/>
            </div>
            <div id='form_of_charge'>
                <form onSubmit={handleSubmit}>
                    <div id='title'>
                        <h1>Load your activity</h1>
                    </div>
                    <div id='datos'>
                        <div>
                            <label htmlFor="">Name:</label>
                            <input type="text" name="name" onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="">Difficulty:</label>
                            <input type='number' min='1' max='5' name='difficulty' onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="">Season:</label>
                            <select name='season' onChange={handleInputChange} required>
                                <option ></option>
                                <option value="Verano">Verano(summer)</option>
                                <option value="Invierno">Winter(Invierno)</option>
                                <option value="Otoño">Fall(Otoño)</option>
                                <option value="Primavera">Spring(primavera)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Countries: </label>
                            <select id="countries_sel" multiple name="country" onChange={handleCountry} required >
                                {city.length > 0 ? city.map((pais, i) => {
                                    return <option value={pais.id3Code} key={pais.id3Code}>{`${pais.id3Code}(${pais.name})`}</option>
                                }) : <option>Cargando</option>}
                            </select>
                        </div>
                        <input id='btn_Form' type='submit' value='Create Activity' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create_Activity