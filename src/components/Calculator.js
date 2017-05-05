import React, { Component } from 'react';
import '../style/Calculator.css';

import {SERVER_HOST} from '../config/config.js'


import Button from './Button.js';
import Display from './Display.js';

class Calculator extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            displayValue: 0,
            previous: 0,
            current: 0,
            operand: '+',
            loading: false,
            // for verification
            hiddenResult: 0
        };

        // bind this to class methods
        this.handleButtonPressed = this.handleButtonPressed.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleResetLoading = this.handleResetLoading.bind(this);        
    }

    // update displayValue when a number is pressed
    handleButtonPressed(buttonValue) {
        // calculate new number after that a new digit has been pressed
        // new number = (old number * 10) + new digit
        const value = ( parseInt(this.state.displayValue, 10) * 10) + parseInt(buttonValue, 10);
        this.setState({
            displayValue: value,
            current: value
        });
    }

    // triggered by component display, after a timeout caused by loading flag set to true
    // this timeout purpose is to simulate a waiting time
    handleResetLoading() {        
        const {previous, current} = this.state

        // API call to perform the addition
        // fetch(`http://192.168.0.8:8000/addition?previous=${previous}&current=${current}`)
        fetch(`http://${SERVER_HOST}:8000/addition?previous=${previous}&current=${current}`)
            .then( (res) => res.text() )
            .then( (data) => {
                console.log(data);
                console.log(this.state.hiddenResult);

                // handle case when a computer is wrong                
                if (parseInt(data, 10) !== this.state.hiddenResult)
                    throw new Error("warning - server and client obtain different results");

                // use the result calculated by the server
                this.setState({
                    previous: data,
                    displayValue: data,
                    current: 0,
                    operand: '+',
                    loading: false,
                    hiddenResult: 0
                });
            })
            .catch( (err) => {
                console.error(err);
            });
            
    }

    // handle when the operator is pressed
    // the operator can be + or =
    handleAction(operand) {      
        console.log('1 '+operand);
        switch(operand) {
            case '+' :
                console.log('2 '+operand);            
                this.setState({
                    previous: this.state.displayValue,
                    displayValue: 0,
                    current: 0,
                    operand: '='
                });                
                break;
            case '=' :
                console.log('3 '+operand);
                this.setState({
                    // previous: this.state.displayValue,
                    displayValue: "WORKING",
                    hiddenResult: parseInt(this.state.previous, 10) + parseInt(this.state.current, 10),
                    // current: parseInt(this.state.previous, 10) + parseInt(this.state.current, 10),
                    // operand: '=',
                    loading: true
                });
                
                break;
            default:
                console.error("case not expected");
        }
    }

    // handle reset button
    handleReset() {
        this.setState({
            displayValue: 0,
            current: 0,
            operand: '+'
        });
    }

    render() {
        return (
            <div className="Calculator">

                <Display 
                    value={this.state.displayValue} 
                    loading={this.state.loading}
                    resetLoading={this.handleResetLoading} />
                <div className="buttons">
                    <div className="line-buttons">
                        <Button label="7" action={this.handleButtonPressed} />
                        <Button label="8" action={this.handleButtonPressed}/>
                        <Button label="9" action={this.handleButtonPressed}/>
                    </div>
                    <div className="line-buttons">
                        <Button label="4" action={this.handleButtonPressed}/>
                        <Button label="5" action={this.handleButtonPressed}/>
                        <Button label="6" action={this.handleButtonPressed}/>
                    </div>
                    <div className="line-buttons">
                        <Button label="1" action={this.handleButtonPressed}/>
                        <Button label="2" action={this.handleButtonPressed}/>
                        <Button label="3" action={this.handleButtonPressed}/>
                    </div>
                    <div className="line-buttons">
                        <Button label="c" action={this.handleReset}/>
                        <Button label="0" action={this.handleButtonPressed}/>
                        <Button label={this.state.operand} action={this.handleAction}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
