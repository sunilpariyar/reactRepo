import React, { Component } from 'react';

class Aboutpage extends Component {
    renderDiv(i) {
        return <Division value={i} />;
    }
    render(){
        return(
            <div className="home-container" style={{display:"flex"}}>
                {this.renderDiv(
                    <div>
                        <h4>This is my about page.</h4>                    
                    </div>
                )}
                
                {this.renderDiv(
                    <div>
                        <h4>Welcome to my web profile</h4>
                    </div>
                )}   
                {this.renderDiv(
                    <div>
                        <h4>Welcome to my web profile</h4>
                    </div>
                )}              
            </div>
        );
    }
}
class Division extends Component{
    render(){
        return(
            <div className="mydiv" style={{width:"50%"}}>
                {this.props.value}
            </div>
        );
    }
}
export default Aboutpage;