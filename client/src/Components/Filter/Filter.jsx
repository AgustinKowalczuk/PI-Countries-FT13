import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { filtro_reg, changeCountries, getActivities, getCountries } from '../../Redux/Actions/Index';

export function Filter(props) {

    useEffect(() => {
		props.getActivities()
	}, [])

	function handleDispatchCont(event) {
		props.filtro_reg(event.target.value)
	}
	function handleDispatchAct(event) {
		props.changeCountries(event.target.value)
	}


    return (
        <div>
            <select name="region" onChange={handleDispatchCont} key='1006'>
                <option value="" key="1001">Filter by Continent</option>
                <option value="Europe"  key="1002">Europe</option>
                <option value="America" key="1003">America</option>
                <option value="Asia"    key="1004">Asia</option>
                <option value="Oceania" key="1005">Oceania</option>
                <option value="Africa"  key="1006">Africa</option>
                <option value="Polar"   key="1007">Polar</option>
            </select>

            <select name="activity" onChange={handleDispatchAct} key='2002'>
                <option value="" key='2003'> Filter by Activity</option>
                {props.activities && props.activities.map(s=>(
                    <option>{s.name_a}</option>
                ))}
            </select>
        </div>
    )
}

function mapStateToProps(state){
    return{
        countries: state.countries,
        activities: state.activities,
    }
}

function mapDispatchToProps(dispatch){
    return {
        filtro_reg: (a,b) => dispatch(filtro_reg(a,b)),
        getActivities: ()=> dispatch(getActivities()),
        changeCountries: (name)=> dispatch(changeCountries(name)),
        getCountries: () => dispatch(getCountries()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Filter)