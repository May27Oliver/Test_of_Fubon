import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/fb_logo.svg';
import home from '../images/btn_home.svg';

const HeaderBox = styled.div`
    width:100%;
    height:84px;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
`
const Wrap = styled.div`
    width:62.5%;
    height:calc( 100% - 8px);
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const HeaderLine = styled.div`
    width:100%;
    height:8px;
    background: transparent linear-gradient(90deg, #00829B 0%, #009583 100%) 0% 0% no-repeat padding-box;
    opacity:1;
`

const LogoImg = styled.img`
    vertical-align: middle; 
`
const BackHome = styled.div`
    display:flex;
    align-items:center;
`
const BackHomePage = styled.span`
    margin-left:5px;
    text-align: left;
    font-size:16px;
    font-family:Heiti TC;
    font-weight:bold;
    letter-spacing: 0px;
    color: #505050;
    opacity: 1;
`

class header extends Component {
    render() {
        return (
            <HeaderBox>
                <HeaderLine></HeaderLine>
                <Wrap>
                    <LogoImg src={logo} width="240" height="44" alt='logo'></LogoImg>
                    <BackHome>
                        <img src={home} width="24.86" height="24.86" alt="home"/>
                        <BackHomePage>回首頁</BackHomePage>
                    </BackHome>
                </Wrap>
            </HeaderBox>
        );
    }
}

export default header;