import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import About from './about';
import Offer from './offer';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Offer/>
            <Footer/>
        </div>
    )
};

export default Home;