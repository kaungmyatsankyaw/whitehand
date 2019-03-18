import React, {Component} from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import axios from 'axios';
import {Link} from 'react-router-dom';
import scrollToElement from '../../scroll';

import '../../resources/js/main.js';
import logo from '../../resources/img/logo.png';
import logo_alt from '../../resources/img/logo-alt.png';
import bg_image from '../../resources/img/background1.jpg';

const  styles={
    color:'black'    
};

class Detail extends Component {

    state = {
        condition: false
    };

    handleClick = () => {
        this.setState({
            condition: !this.state.condition
        });
    };

    

    componentDidMount() {
        const id = this.props.match.params.id;
       
        axios.get('http://localhost/wh_cms/public/api/project/' + id )
            .then((response) => {
                console.log(response.data[0].images);
            });

    }

    render() {
        return (
            <div>
 
<header id="home">


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
                                    <a onClick={() => scrollToElement('home')} style={styles}>Home</a></li>
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

<div class="header-wrapper sm-padding bg-grey">
    <div class="container">
        <h2>Blog Page</h2>
        <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="index.html#blog">Blog</a></li>
            <li class="breadcrumb-item active">Single Post</li>
        </ul>
    </div>
</div>


</header>
                
                <Footer/>

            </div>
        )
    }
}


export default Detail;