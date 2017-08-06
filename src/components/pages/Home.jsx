import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../profilePic.png';
import fb from '../fb.png';
import linkedIn from '../linkedIn.png';

class Homepage extends Component {
    renderDiv(i) {
        return <Division value={i} />;
    }
    render() {
        return (
            <div className="home-container">
                {this.renderDiv(
                    <div>
                        <img src={profilePic} alt="myphoto" height="150" width="130" />
                        <h4>Hi there! <br />This is me <a style={{color:"#127167"}}>Sunil Pariyar</a></h4>
                        
                        <p style={{fontSize:"13"}}>
                            Recent graduate from <strong style={{fontSize:"16", color:"#f2c22e"}}>Federation University</strong>.
                            <br/>
                            Intern at <strong style={{fontSize:"16",color:"#127167"}}>Outcome.life</strong>
                            <br/>
                            <br/>
                            <hr/>
                            <br/>
                            <br/>
                        </p>
                    </div>
                )}
                {this.renderDiv(
                    <div className="fb-li" style={{marginRight:"25px"}}>
                        <ol>                            
                            <a href="https://www.facebook.com/pariyar?ref=bookmarks">
                                <img src={fb} style={{ padding: "2px", height: "40" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/sunil-pariyar-70a242a8/">
                                <img src={linkedIn} style={{ padding: "2px", height: "40" }} />
                            </a>
                            
                        </ol>                        
                    </div>
                )}
            </div>
        );
    }
}
class Division extends Component {
    render() {
        return (
            <div className="mydiv">
                {this.props.value}
            </div>
        );
    }
}
export default Homepage;