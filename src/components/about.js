import React, {Component} from 'react';
<<<<<<< HEAD
import scrollToElement from '../scroll';
import {Element} from 'react-scroll';

class About extends Component {

    componentDidMount() {
        var location = window.location.pathname;
        if (location === '/about') {
            scrollToElement('about')
        }
    }

    render() {
        return (
            <div>
                <Element name="about">
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


=======


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
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
                            </div>


                        </div>


                    </div>
<<<<<<< HEAD
                </Element>
=======


                </div>
>>>>>>> efff24e6a1fa4846777ca85b3a55f1ec7848b427
            </div>
        )
    }
}


export default About;