import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Picture/Logo_Home.png'
import './Navbar.css'

function Nav(){
    return(
        <div >
            <nav id='Content_nav' >
                <Link to={'/home'}>
                    <img id='img_home' src={logo} alt="Home"/>
                </Link>
                <Link to={'/activity'}>
                    <h3 id='Create_act'>Create Activity</h3>
                </Link>
            </nav>
        </div>
    )
}

export default Nav;