import React, {Component} from 'react';
import Projects from './projects';
import axios from 'axios';
<<<<<<< HEAD
import {Element} from 'react-scroll';

import Header from '../layout/header';
import Contact from '../contact';
import Footer from '../layout/footer';
import scrollToElement from "../../scroll";

=======
import {Link} from "react-router-dom";
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427

class Project extends Component {

    state = {
        projects: []
    };

    componentDidMount() {
<<<<<<< HEAD

        if (window.location.pathname === '/projects') {
            scrollToElement('projects')
        }

=======
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
        axios.get('http://www.splashbase.co/api/v1/images/latest').then((response) => {
            this.setState({projects: response.data.images});
            console.log(this.state.projects)
        })
    }

    render() {
        return (
<<<<<<< HEAD
            <div>
                <Header/>

                <Element name="projects">
                    <div id="portfolio" className="section md-padding bg-grey">

                        <div className="container">

                            <div className="row">

                                <div className="section-header text-center">
                                    <h2 className="title">Our Projects</h2>
                                </div>

                                {this.state.projects.map((project, index) => (
                                    <Projects project={project} key={project.id}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </Element>

                <Contact/>
                <Footer/>
=======
            <div id="portfolio" className="section md-padding bg-grey">


                <div className="container">

                    <div className="row">

                        <div className="section-header text-center">
                            <h2 className="title">Our Projects</h2>
                        </div>

                        {this.state.projects.map((project, index) => (
                            <Projects project={project} key={project.id}/>
                        ))}
                    </div>
                    <div className="row col-lg-offset-5">
                        <Link to="/projects">
                            <button className="main-btn">All Projects</button>
                        </Link>
                    </div>
                </div>
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
            </div>
        )
    }
}

export default Project;