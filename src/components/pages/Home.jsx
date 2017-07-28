import React, { Component } from 'react';
import profilePic from '../profilePic.png';
import '/home/pariyar/projects/react/myapp/src/App.css';


class Homepage extends Component {
    renderDiv(i) {
        return <Division value={i} />;
    }
    render(){
        return(
            <div className="home-container">
                {this.renderDiv(
                    <div>
                        <img src={profilePic} alt="myphoto" height="150" width="130" />
                        <h4>Hi there! <br/>This is me Sunil Pariyar</h4>
                    
                    </div>
                )}
                {this.renderDiv(
                    <h3>Welcome to my web profile</h3>)}
                
            </div>
        );
    }
}
class Division extends Component{
    render(){
        return(
            <div className="mydiv">
                {this.props.value}
            </div>
        );
    }
}
export default Homepage;