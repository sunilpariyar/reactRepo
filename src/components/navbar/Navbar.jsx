import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return(          
            <div>               
                <div style={{width:"100%", height:"20", backgroundColor:""}}></div>
                <div style={{width:"100%",height:50, backgroundColor:""}}>
                <Link style={{fontFamily:"Ubuntu", fontSize:"32", color:"#4040a1"}} to="/">Home </Link>
                <Link style={{fontFamily:"Ubuntu", fontSize:"32", color:"#4040a1"}} to="/contact">Contact </Link>
                <Link style={{fontFamily:"Ubuntu", fontSize:"32", color:"#4040a1"}} to="/about">About </Link>
                </div>
            </div>
        );
    }
}
export default Navbar;