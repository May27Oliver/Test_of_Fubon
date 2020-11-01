import React, { Component } from 'react';

class navItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <label className="nav-link">
                    <svg
                        aria-hidden={this.props.aria_hidden}
                        focusable={this.props.falsable}
                        data-prefix={this.props.prefix}
                        data-icon={this.props.dataIcon}
                        role={this.props.role}
                        xmlns={this.props.xmlns}
                        viewBox={this.props.viewBox}
                        className={this.props.svg_className}
                    >
                        <g className="fa-group">
                            <path
                                fill={this.props.path_fill1}
                                d={this.props.path_d1}
                                className={this.props.path_className1}
                            ></path>
                            <path
                                fill={this.props.path_fill2}
                                d={this.props.path_d2}
                                className={this.props.className2}
                            ></path>
                        </g>
                    </svg>
                    <span className="link-text">{this.props.link_text}</span>
                </label>
            </li>
        );
    }
}

export default navItem;