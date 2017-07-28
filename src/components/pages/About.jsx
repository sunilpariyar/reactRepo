import React, { Component } from 'react';

class Aboutpage extends Component {
    renderDiv(i) {
        return <Division value={i} />;
    }
    render(){
        return(
            <div className="home-container">
                {this.renderDiv(
                    <div>
                        <h4>This is my about page</h4>
                    
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
export default Aboutpage;