import React from 'react';
import Navigation from './Navber/Navigation';
import { Outlet } from 'react-router-dom';
// import Carusel from '../Carouse/Carusel';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Carusel></Carusel> */}
            <Outlet/>
        </div>
    );
};

export default Home;