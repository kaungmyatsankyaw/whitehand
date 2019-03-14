import React from 'react';
import {Link} from "react-router-dom";

const imageStyle = {
    with: '100%',
    height: '400px'
};

const Projects = (props) => {

    return (

        <div className="col-md-4 col-xs-6 work">
            <img className="img-responsive" src={props.project.url} style={imageStyle} alt={'project'}/>
            <div className="overlay"></div>
            <div className="work-content">
                <span>Category</span>
                <h3>Lorem ipsum dolor</h3>
                <div className="work-link">
                    <Link to={'/project/'+props.project.id}>
                        <i className="fa fa-external-link"></i>
                    </Link>
                    <a className="lightbox" href={props.project.url}>
                        <i className="fa fa-search"></i>
                    </a>
                </div>
            </div>
        </div>

    )
};

export default Projects;