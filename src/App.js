import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './resources/css/style.css';
import './resources/css/magnific-popup.css';


import Home from './components/home';
import Project from './components/project/project';
import Detail from '../src/components/project/detail'


class App extends Component {


    render() {
        return (
            <Router>

                <React.Fragment>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={Home}/>
                        <Route path="/projects" component={Project}/>
                        <Route path="/project/:id" component={Detail}/>
                    </Switch>

                </React.Fragment>
            </Router>

        );
    }
}

export default App;
