import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing(){
    return (
        <div id="Cont_landing">
            <h1>Welcome The Landing Page</h1>
            <Link to={'/home'}>
                <button id='Landing'>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing