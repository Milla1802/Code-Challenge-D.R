import React, { useContext } from 'react';
import CalcContext from '../context/CalcContext';
import { Link } from 'react-router-dom';

import Wall1 from '../components/Wall1';
import Wall2 from '../components/Wall2';
import Wall3 from '../components/Wall3';
import Wall4 from '../components/Wall4';
import Janelas from '../components/Janelas';
import Portas from '../components/Portas';
import Header from '../components/Header';

const Home = () => {

    const { area1, area2, area3, area4} = useContext(CalcContext);

    
    return(
        <main>
            <Header />
            <div className="home_container">
                <Wall1 />
                <Wall2 />
                <Wall3 />
                <Wall4 />
                <Janelas />
                <Portas />
                {
                (area1 !== 0 && area2 !== 0 && area3 !== 0 && area4 !== 0) ?
                <div className="tag_link"><Link to="/calc">Cálculo Total</Link></div> : ''
                }
            </div>
        </main>
    );
}

export default Home;