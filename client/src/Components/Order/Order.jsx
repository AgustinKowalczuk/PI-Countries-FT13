import React from 'react';
import { connect } from 'react-redux';

import { order_abc, order_population, ASD, DES, HASD, HDES } from '../../Redux/Actions/Index';

export function Order(props) {

    function handleDispatchOrder(event) {
        if (event.target.value === ASD || event.target.value === DES) {
            props.order_abc(event.target.value, props.countries)
        }
    }

    function handleDispatchHab(event) {
        if (event.target.value === HASD || event.target.value === HDES) {
            props.order_population(event.target.value, props.countries)
        }
    }

    return (
        <div>
            <select onChange={handleDispatchOrder}>
                <option>Order Alphabetically</option>
                <option value={ASD}>Ascendant</option>
                <option value={DES}>descendant</option>
            </select>
            <select onChange={handleDispatchHab}>
                <option>Order by Population</option>
                <option value={HDES}>Ascendant</option>
                <option value={HASD}>descendant</option>
            </select>
        </div>
    )
}

function mapStateToProps(state){
    return{
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch){
    return{
        order_abc: (a,b) => dispatch(order_abc(a,b)),
        order_population: (a,b) => dispatch(order_population(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order)