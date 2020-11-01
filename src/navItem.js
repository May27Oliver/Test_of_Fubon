import React, { Component } from 'react';

class navItem extends Component {
    render() {
        const {svg} = this.props;
        return (
            <li className="nav-item">
                <label className="nav-link">
                    <svg
                        aria-hidden={svg.aria_hidden}
                        focusable={svg.falsable}
                        data-prefix={svg.prefix}
                        data-icon={svg.dataIcon}
                        role={svg.role}
                        xmlns={svg.xmlns}
                        viewBox={svg.viewBox}
                        className={svg.svg_className}
                    >
                        <g className="fa-group">
                            <path
                                fill={svg.path_fill1}
                                d={svg.path_d1}
                                className={svg.path_className1}
                            ></path>
                            <path
                                fill={svg.path_fill2}
                                d={svg.path_d2}
                                className={svg.className2}
                            ></path>
                        </g>
                    </svg>
                    <span className="link-text">{svg.link_text}</span>
                </label>
            </li>
        );
    }
}

export default navItem;