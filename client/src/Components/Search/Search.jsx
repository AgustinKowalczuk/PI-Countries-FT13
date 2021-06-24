import React, { useState } from 'react';

import { connect } from 'react-redux';

import { getCountry } from '../../Redux/Actions/Index';

export function Search(props) {

    const [input, setInput] = useState({
        name: "",
    })

    function handleChange(e) {
        setInput({
            name: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (input.name) {
            props.getCountry(input.name)
        } else if (!input.name) {
            alert("Nombre invalido")
            console.log("Intenta con el nombre en ingles")
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Buscar..."
                    name="name"
                    value={input.name}
                    onChange={(e) => handleChange(e)} 
                />
                <button type="submit">🔎</button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch){
    return {
        getCountry: name => dispatch(getCountry(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)