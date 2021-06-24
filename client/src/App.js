import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing.jsx'
import Home from './Components/Home/Home';
import Nav from './Components/Navbar/Navbar';
import Detail_country from './Components/Detail_country/Detail_country';
import Create_Activity from './Components/Form_activity/Form_activity';



function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route path="/" exact component={Landing} />
        <div>
          <Route path="/home" exact component={Nav} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/country_detail/:id3Code" exact component={Detail_country}/>
          <Route path="/activity" component={Create_Activity}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
