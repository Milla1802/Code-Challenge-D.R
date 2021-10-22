import React from 'react';
import Wall1 from './Wall1';
import Wall2 from './Wall2';
import Wall3 from './Wall3';
import Wall4 from './Wall4';
import Janelas from './Janelas';
import Portas from './Portas';

const Home = () => {
    
    return(
        <div>
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