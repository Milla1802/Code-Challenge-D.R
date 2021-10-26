import React from 'react';
import '../css/style.css';

import Wall1 from '../components/Wall1';
import Wall2 from '../components/Wall2';
import Wall3 from '../components/Wall3';
import Wall4 from '../components/Wall4';
import Janelas from '../components/Janelas';
import Portas from '../components/Portas';

const Home = () => {
    
    return(
        <div className="home_container">
            <Wall1 />
            <Wall2 />
            <Wall3 />
            <Wall4 />
            <Janelas />
            <Portas />
        </div>
    );
}

export default Home;