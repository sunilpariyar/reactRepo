import React, {Component} from 'react';
import Homepage from '../pages/Home';
import Aboutpage from '../pages/About';
import Contactpage from '../pages/Contact';
import { Switch, Route as Router } from 'react-router-dom';

class Route extends Component {
    render() {
        return (
            <Switch>
                <Router exact path="/" component={Homepage} />
                <Router exact path="/contact" component={Contactpage} />
                <Router exact path="/about"  component={Aboutpage}/>
                
            </Switch>
        );
    }
}
export default Route;