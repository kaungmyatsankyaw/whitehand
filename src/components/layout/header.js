import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../resources/img/logo.png';
import logo_alt from '../../resources/img/logo-alt.png';
import bg_image from '../../resources/img/background1.jpg';

import '../../resources/js/main.js';
import scrollToElement from '../../scroll';

class Header extends Component {

    state = {
        condition: false
    };

    handleClick = () => {
        this.setState({
            condition: !this.state.condition
        });
    };

    render() {
        return (
            <div>
                <div className="bg-img" style={{background: `url(${bg_image})`}}>
                    <div className='overlay'></div>
                </div>
                <header id="home">

                    <div className="bg-img" style={{
                        background: `url(${bg_image})`
                    }}>
                        <div className="overlay"></div>
                    </div>

                    <nav id="nav" className={this.state.condition ? ' navbar nav-transparent open' : 'navbar nav-transparent' }>
                        <div className="container">

                            <div className="navbar-header">

                                <div className="navbar-brand">

                                    <img className="logo" src={logo} alt="logo"/>
                                    <img className="logo-alt" src={logo_alt} alt="logo"/>

                                </div>

                                <div className="nav-collapse  "
                                     onClick={this.handleClick}>
                                    <span></span>
                                </div>

                            </div>


                            <ul className="main-nav nav navbar-nav navbar-right">
                                <li>
                                    <a  onClick={() => scrollToElement('home')}>Home</a></li>
                                <li>
                                    <Link to="/about">
                                        <span onClick={() => scrollToElement('about')}>About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/projects'>
                                        <span onClick={() => scrollToElement('project')}> Our Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/service'>
                                        <span onClick={() => scrollToElement('offer')}>Services</span>
                                    </Link>
                                </li>
                                <li><a href="#" onClick={() => scrollToElement('team')}>Team</a></li>
                                <li><a href="#" onClick={() => scrollToElement('contact')}>Contact</a></li>
                            </ul>


                        </div>
                    </nav>

                    <div className="home-wrapper">
                        <div className="container">
                            <div className="row">

                                {/*home content */}
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="home-content">
                                        <h1 className="white-text">We Are Creative Agency</h1>
                                        <p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non
                                            justo. In nisl. Nullam
                                            sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu.
                                            Nunc posuere.
                                        </p>
                                        {/*<button className="white-btn">Get Started!</button>*/}
                                        <button className="main-btn" onClick={() => scrollToElement('contact')}>Contact
                                            Us
                                        </button>
                                    </div>
                                </div>
                                {/*/home content */}

                            </div>
                        </div>
                    </div>

                </header>
            </div>
        )

    }

}

export default Header;