import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {BrowserRouter as Router, Route,  Switch} from "react-router-dom";

import './resources/css/style.css';
import './resources/css/magnific-popup.css';

import Header from './components/layout/header';
import About from './components/about';
import Offer from './components/offer';
import Footer from './components/layout/footer';
import Project from './components/project/project';


class App extends Component {


    render() {
        return (
            <Router>

                <React.Fragment>

                    <Element name="home">
                        <Header/>
                    </Element>

                    <Element name="about">
                        <About/>
                    </Element>

                    <Element name="project">
                        <Project/>
                    </Element>

                    <Element name="offer">
                        <Offer/>
                    </Element>

                    <Footer/>

                    <Switch>
                        <Route path="/projects" component={Project}/>
                    </Switch>

                </React.Fragment>
            </Router>

        );
    }
}

export default App;
