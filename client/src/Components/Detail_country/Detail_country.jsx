import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../Redux/Actions/Index';
import Nav from '../Navbar/Navbar';

import './Detail_country.css'

function Detail_country(props) {

    useEffect(() => {
        const id3Code = props.match.params.id3Code;
        props.getCountryDetail(id3Code)
    }, [])

    return (
        <div id='detail_table'>
            <div>
                <Nav />
            </div>
            <div id="planilla">
                <div id='flag'>
                    <img src={props.country_Detail.flag} alt={props.country_Detail.name} />
                </div>
                <div id='information'>
                    <h1>{props.country_Detail.name}</h1>
                    <h2>{props.country_Detail.continent}</h2>
                    <h3>id: {props.country_Detail.id3Code}</h3>
                    <p>Capital: {props.country_Detail.capital}</p>
                    <p>Subregión: {props.country_Detail.subregion}</p>
                    <p>Región: {props.country_Detail.region}</p>
                    <p>Area: {props.country_Detail.area}km2 </p>
                    <p>Population: {props.country_Detail.population} </p>
                </div>

            </div>
            <div id="activities">
                <hr />
                <h1>Activities</h1>
                {console.log(props.country_Detail)}
                <p >{props.country_Detail.activities && props.country_Detail.activities.map(c =>
                    <div>
                        <hr />
                        <div id="infActiv">
                            <div>
                                Activity: {c.name_a}
                            </div>
                            <div>
                                Difficulty: {c.difficulty}
                            </div>
                            <div>
                                Season: {c.season}
                            </div>
                        </div>
                    </div>
                )}</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        country_Detail: state.country_Detail,
        activities: state.activities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCountryDetail: (id3Code) => dispatch(getCountryDetail(id3Code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail_country)