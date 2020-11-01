import React, { Component } from 'react';

class selectItem extends Component {
    state = {
        title:this.props.title
    }
    render() {
        return (
            <div className="nav-item">
                <label>{this.props.title}</label>
            </div>
        );
    }
}

export default selectItem;