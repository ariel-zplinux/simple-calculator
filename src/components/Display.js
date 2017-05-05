import React, { Component } from 'react';
import '../style/Calculator.css';
import logo from '../assets/images/logo.svg';

class Display extends Component {
    
    render() {
        const loading = this.props.loading;

        let loadingAnim = null;
        if (loading) {
            console.log("loading");
            loadingAnim = <img src={logo} className="App-logo" alt="logo" />
            setTimeout( this.props.resetLoading, 3000);            
            
        }
        else
            loadingAnim = <img src={logo} className="App-logo-quiet" alt="logo" />

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
