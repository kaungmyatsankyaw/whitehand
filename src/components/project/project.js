import React, {Component} from 'react';
import Projects from './projects';
import axios from 'axios';
import {Element} from 'react-scroll';

import Header from '../layout/header';
import Contact from '../contact';
import Footer from '../layout/footer';
import scrollToElement from "../../scroll";


class Project extends Component {

    state = {
        projects: []
    };

    componentDidMount() {

        if (window.location.pathname === '/projects') {
            scrollToElement('projects')
        }

        axios.get('http://www.splashbase.co/api/v1/images/latest').then((response) => {
            this.setState({projects: response.data.images});
            console.log(this.state.projects)
        })
    }

    render() {
        return (
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
            </div>
        )
    }
}

export default Project;