import React from 'react';
import ScrollToTop from 'react-scroll-up';


const Footer = () => {
    return (
        <div>
            <footer id="footer" className="sm-padding bg-dark">


                <div className="container">


                    <div className="row">

                        <div className="col-md-12">


                            <ul className="footer-follow">
                                <li><a href="www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                            </ul>

                            <div className="footer-copyright">
                                <p>Copyright © 2017. All Rights Reserved. Designed by <a href="https://colorlib.com"
                                                                                         target="_blank">Colorlib</a>
                                </p>
                            </div>


                        </div>

                    </div>


                </div>


            </footer>
            <ScrollToTop showUnder={200}>
                <div id="back-to-top"></div>
            </ScrollToTop>
        </div>
    )
}

export default Footer;