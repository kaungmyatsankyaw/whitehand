import React, {Component} from 'react';


class About extends Component {
    render() {
        return (
            <div>
                <div id="about" className="section md-padding">


                    <div className="container">


                        <div className="row">


                            <div className="section-header text-center">
                                <h2 className="title">Welcome to <b>WHITEHAND</b></h2>
                            </div>

                            <div className="col-md-4">
                                <div className="about">
                                    <i className="fa fa-cogs"></i>
                                    <h3>Fully Customizible</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit
                                        amet.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="about">
                                    <i className="fa fa-magic"></i>
                                    <h3>Awesome Features</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit
                                        amet.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="about">
                                    <i className="fa fa-mobile"></i>
                                    <h3>Fully Responsive</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit
                                        amet.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        )
    }
}


export default About;