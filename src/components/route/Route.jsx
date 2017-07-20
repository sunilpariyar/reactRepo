import React, {Component} from 'react';
import { Switch, Route as Router } from 'react-router-dom';

class Route extends Component {
    render() {
        return (
            <Switch>
                <Router exact path="/" render={()=> <h1> I am Home page</h1>} />
                <Router exact path="/contact" render={()=> <h1> I am contact page</h1>} />
                <Router exact path="/about" render={()=> <h1> I am about page</h1>} />
                
            </Switch>
        );
    }
}
export default Route;