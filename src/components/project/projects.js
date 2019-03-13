import React from 'react';

const imageStyle={
    with:'100%',
    height:'400px'
};

const Projects = (props) => {

    return (

            <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src={props.project.url} style={imageStyle} />
                    <div className="overlay"></div>
                    <div className="work-content">
                        <span>Category</span>
                        <h3>Lorem ipsum dolor</h3>
                        <div className="work-link">
                            <a href="#">
                                <i className="fa fa-external-link"></i></a>
                            <a className="lightbox" href={props.project.url}><i className="fa fa-search"></i></a>
                        </div>
                    </div>
            </div>

    )
};

export default Projects;