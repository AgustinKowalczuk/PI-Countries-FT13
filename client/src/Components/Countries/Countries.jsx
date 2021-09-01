import React, { useEffect, useState } from 'react';
import './Countries.css';
import { connect } from 'react-redux';
import { getCountries, getCountry } from '../../Redux/Actions/Index';
import Country from '../Country/Country_Card'

export function Countries_cont(props) {
    const [numberPage, setNumberPage] = useState(1);

    const grupo = 10;
    const page_final = numberPage * grupo;
    const page_inicial = page_final - grupo;

    const countries = props.countries.slice(page_inicial, page_final)

    useEffect(() => {
        props.getCountries()
    }, [])

    if (numberPage < 1) {
        setNumberPage(1)
        return;
    }
    else if (numberPage > 25) {
        setNumberPage(25)
        return;
    }
    return (
        <div>
            <div id='pag'>
                <button onClick={() => setNumberPage(numberPage - 1)}>◀</button>
                <h3>{numberPage}</h3>
                <button onClick={() => setNumberPage(numberPage + 1)}>▶</button>
            </div>
            <div id='cont'>
                {countries ? countries.map(country =>
                    <div>
                        <Country
                            name={country.name}
                            flag={country.flag}
                            id3Code={country.id3Code}
                            subregion={country.subregion} />
                    </div>) : (<p>Pais No Encontrado</p>)}
            </div>
            <div id='pag'>
                <button onClick={() => setNumberPage(numberPage - 1)}>◀</button>
                <h3>{numberPage}</h3>
                <button onClick={() => setNumberPage(numberPage + 1)}>▶</button>
            </div>
        </div>
    )

}

function mapStateToProps(state) {
    console.log(state)
    return {
        countries: state.countries
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCountries: () => dispatch(getCountries()),
        getCountry: name => dispatch(getCountry(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Countries_cont)