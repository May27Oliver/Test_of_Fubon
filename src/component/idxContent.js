import React, { Component } from 'react';
import styled from 'styled-components';
import Pic1 from '../images/instructions/web/web01.png';

const Wrap = styled.div`
    width:62.5%;
    height:calc( 100% - 8px);
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:84px;
`

class idxContent extends Component {
    render() {
        return (
            <Wrap>
                <img src={Pic1} width="100%" height="455.88" alt="home"/>
                
            </Wrap>
        );
    }
}

export default idxContent;