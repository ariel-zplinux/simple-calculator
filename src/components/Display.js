import React, { Component } from 'react';
import '../style/Display.css';
import logo from '../assets/images/logo.svg';

class Display extends Component {    
    render() {
        const loading = this.props.loading;
        let loadingAnim = null;
        
        if (loading) {
            // animated logo
            loadingAnim = <img src={logo} className="App-logo" alt="logo" />
            // simulate calculating time
            setTimeout( this.props.resetLoading, 3000);            
        }
        else {            
            loadingAnim = <img src={logo} className="App-logo-quiet" alt="logo" />            
        }

        return (
            <div className="Display">
                <div>
                    {loadingAnim}                    
                </div>
                <div className="value">
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default Display;
