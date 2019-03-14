import React, {Component} from 'react';
import Projects from './projects';
import axios from 'axios';

import Header from '../layout/header';
import Footer from '../layout/footer';


class Project extends Component {

    state = {
        projects: []
    };

    componentDidMount() {
        axios.get('http://www.splashbase.co/api/v1/images/latest').then((response) => {
            this.setState({projects: response.data.images});
            console.log(this.state.projects)
        })
    }

    render() {
        return (
            <div>
                <Header/>
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
                <Footer/>
            </div>
        )
    }
}

export default Project;