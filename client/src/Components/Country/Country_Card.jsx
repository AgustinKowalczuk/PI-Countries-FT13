import React from 'react';
import { Link } from 'react-router-dom';
import './Country_Card.css'

export function Country(props){
    return(
        <div class='card'>
            <div id='content_flag'>
                <img id='flag' src={props.flag} alt={`la bandera de ${props.name} no se encuentra :(`} />
            </div>
            <div>
                <div id='text_cards'>
                    <h1>{props.name}</h1>
                    <h1>{props.subregion}</h1>
                </div>
                <Link to={`/home/country_detail/${props.id3Code}`}>
                    <button id='Btn_detail'>Country Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Country