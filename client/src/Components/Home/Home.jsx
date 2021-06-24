import React from 'react';
import './Home.css'
import Countries from '../Countries/Countries'
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Order from '../Order/Order';


function Home() {
    return (
        <div>
            <div id='NavBarr_'>
                <Search/>
                <Filter/>
                <Order/>
            </div>
            <div>
                <Countries />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home