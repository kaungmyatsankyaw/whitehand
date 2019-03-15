import React, {Component} from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
=======
import {Element} from 'react-scroll';
import {BrowserRouter as Router, Route,  Switch} from "react-router-dom";
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427

import './resources/css/style.css';
import './resources/css/magnific-popup.css';

<<<<<<< HEAD

import Home from './components/home';
import Project from './components/project/project';
import Detail from '../src/components/project/detail'
=======
import Header from './components/layout/header';
import About from './components/about';
import Offer from './components/offer';
import Footer from './components/layout/footer';
import Project from './components/project/project';
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427


class App extends Component {


    render() {
        return (
            <Router>

                <React.Fragment>

<<<<<<< HEAD
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={Home}/>
                        <Route path='/service' component={Home}/>

                        <Route path="/projects" component={Project}/>
                        <Route path="/project/:id" component={Detail}/>
=======
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
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
                    </Switch>

                </React.Fragment>
            </Router>

        );
    }
}

export default App;
