import React, {Component} from 'react';
<<<<<<< HEAD
import scrollToElement from '../scroll';


class Offer extends Component {

    componentDidMount() {
        var location = window.location.pathname;
        if (location === '/service') {
            scrollToElement('service')
        }
    }

    render() {
        return (
            <div id="service" className="section md-padding">


                <div className="container">


                    <div className="row">


                        <div className="section-header text-center">
                            <h2 className="title">What we offer</h2>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-diamond"></i>
                                <h3>App Development</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-rocket"></i>
                                <h3>Graphic Design</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-cogs"></i>
                                <h3>Creative Idea</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-diamond"></i>
                                <h3>Marketing</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-pencil"></i>
                                <h3>Awesome Support</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-flask"></i>
                                <h3>Brand Design</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
=======


class Offer extends Component {
        render() {
            return(
                <div id="service" className="section md-padding">


                    <div className="container">


                        <div className="row">


                            <div className="section-header text-center">
                                <h2 className="title">What we offer</h2>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-diamond"></i>
                                    <h3>App Development</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-rocket"></i>
                                    <h3>Graphic Design</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-cogs"></i>
                                    <h3>Creative Idea</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-diamond"></i>
                                    <h3>Marketing</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-pencil"></i>
                                    <h3>Awesome Support</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="service">
                                    <i className="fa fa-flask"></i>
                                    <h3>Brand Design</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                                </div>
                            </div>


>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
                        </div>


                    </div>


                </div>
<<<<<<< HEAD


            </div>
        )
    }
=======
            )
        }
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
}

export default Offer;