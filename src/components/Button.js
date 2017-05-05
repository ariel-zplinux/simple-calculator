import React, { Component } from 'react';
// import './Calculator.css';

class Button extends Component {
    constructor(props){
        super(props);

        this.action = this.action.bind(this);
    }


    action() {
        this.props.action(this.props.label);
    }

    render() {
        return (
            <button onClick={this.action}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;
