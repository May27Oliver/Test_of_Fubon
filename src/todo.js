import React, { Component } from 'react';

class todo extends Component {
    constructor(props){
        super(props);
        this.state={
            input_please:props.initText,
        }
    }
    render() {
        return (
            <div>
                <div className="input-box">
                    <input placeholder={this.state.input_please}/>
                </div>
            </div>
        );
    }
}

export default todo;