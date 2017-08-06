import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return(          
            <div>               
                <div style={{width:"100%", height:"20", color:"white"}}></div>
                <div style={{fontFamily:"Ubuntu", fontSize:"32"}}>
                    <Link to="/" style={{padding:"5px"}}>Home </Link>
                    <Link to="/about" style={{padding:"5px"}}>About </Link>
                    <Link to="/contact" style={{padding:"5px"}}>Contact </Link>                    
                </div>
                <hr/>
            </div>
        );
    }
}
export default Navbar;