import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import About from './about';
import Offer from './offer';
import Contact from './contact';
import {Element} from 'react-scroll';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
          <Element name="offer">
              <Offer/>
          </Element>
            {/*<Element name='contact'>*/}
                <Contact/>
            {/*</Element>*/}
            <Footer/>
        </div>
    )
};

export default Home;