import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Picture/Logo_Home.png'
import './Navbar.css'
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Order from '../Order/Order';
function Nav() {
    return (
        <div >
            <div id="estiloNav">
                <nav id='Content_nav' >
                    <Link to={'/home'}>
                        <img id='img_home' src={logo} alt="Home" />
                    </Link>
                    <Link to={'/activity'}>
                        <h3 id='Create_act'>Create Activity</h3>
                    </Link>
                </nav>
                <hr />
                <div id='NavBarr_'>
                    <Filter />
                    <Order />
                    <Search />
                </div>
            </div>

        </div>
    )
}

export default Nav;