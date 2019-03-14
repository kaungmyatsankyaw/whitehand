import React, {Component} from 'react';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: []
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const {name, email, subject, message} = this.state;
        // var errors=[];
        if(name === ""){
          let  error='Name is required';
            this.setState({
                errors:this.state.errors.concat([error])
            })
        }

        console.log(this.state);

    };

    render() {

        return (
            <div>
                <div id="contact" className="section md-padding">


                    <div className="container">


                        <div className="row">


                            <div className="section-header text-center">
                                <h2 className="title">Get in touch</h2>
                            </div>

                            <div className="col-sm-4">
                                <div className="contact">
                                    <i className="fa fa-phone"></i>
                                    <h3>Phone</h3>
                                    <p>512-421-3940</p>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="contact">
                                    <i className="fa fa-envelope"></i>
                                    <h3>Email</h3>
                                    <p>email@support.com</p>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="contact">
                                    <i className="fa fa-map-marker"></i>
                                    <h3>Address</h3>
                                    <p>1739 Bubby Drive</p>
                                </div>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <form className="contact-form" onSubmit={this.onSubmit.bind(this)}>
                                    <input type="text" className="input" placeholder="Name" name="name"
                                           onChange={this.onChange}/>
                                    <input type="email" className="input" placeholder="Email" name="email"
                                           onChange={this.onChange}/>
                                    <input type="text" className="input" placeholder="Subject" name="subject"
                                           onChange={this.onChange}/>
                                    <textarea className="input" placeholder="Message" name="message"
                                              onChange={this.onChange}/>
                                    <button className="main-btn">Send message</button>
                                </form>
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        )
    }
}

export default Contact;