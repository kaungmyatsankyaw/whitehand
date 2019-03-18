import React from 'react';
import {Link} from "react-router-dom";


const imageStyle = {
    with: '100%',
    height: '440px'
};

const Projects = (props) => {



    return (

        <div className="col-md-4 col-xs-6 work">
            <img className="img-responsive" src={props.project.image} style={imageStyle} alt={'project'}/>
            <div className="overlay"></div>
            <div className="work-content">
                <span>{props.project.name}</span>
            
                <div className="work-link">
                    <Link to={'/project/' + props.project.id}>
                        <i className="fa fa-external-link"></i>
                    </Link>
                    <a className="lightbox" href={props.project.p_link}>
                        <i className="fa fa-search"></i>
                    </a>
                </div>
            </div>
        </div>

    )
};

export default Projects;