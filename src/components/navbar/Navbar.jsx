import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return(
            <div style={{width:"100%",height:80, backgroundColor:"green"}}>
               <Link to="/">Home </Link>
               <Link to="/contact">contact </Link>
               <Link to="/about">about </Link>
               

            </div>
        );
    }
}
export default Navbar;