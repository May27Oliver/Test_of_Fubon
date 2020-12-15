import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/fb_logo.svg';
import home from '../images/btn_home.svg';

const HeaderBox = styled.div`
    width:100%;
    height:${props=>props.phone?'62px':'84px'};
    background:#fff;
    box-shadow:${props=>props.phone?"0px 3px 6px #0000005D":"none"};
    position:fixed;
    z-index:100;
    top:0;
    left:0;
`
const Wrap = styled.div`
    position:${props=>props.phone?'relative':'static'};
    width:${props=>props.phone?'100%':'62.5%'};
    height:calc( 100% - 8px);
    margin:auto;
    display:flex;
    justify-content:${props=>props.phone?'center':'space-between'};
    align-items:center;
`
const HeaderLine = styled.div`
    width:100%;
    height:8px;
    background: transparent linear-gradient(90deg, #00829B 0%, #009583 100%) 0% 0% no-repeat padding-box;
    opacity:1;
`

const LogoImg = styled.div`
    width:${props=>props.phone?'128.68px':'240px'};
    height:${props=>props.phone?'27.45px':'44px'};
    background:url(${props=>props.src}) #fff no-repeat;
    vertical-align: middle; 
`
const BackHome = styled.div`
    position:${props=>props.phone?'absolute':'static'};
    top:16px;
    right:23.14px;
    display:flex;
    align-items:center;
`
const BackHomePage = styled.span`
    display:${props=>props.phone?'none':'inline-block'};
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
    toTheTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        const isMobile = window.screen.width < 500;

        return (
            <HeaderBox phone={isMobile}>
                <HeaderLine></HeaderLine>
                <Wrap phone={isMobile}>
                    <LogoImg src={logo} phone={isMobile} alt='logo'></LogoImg>
                    <BackHome phone={isMobile} onClick={this.toTheTop}>
                        <img src={home} width="24.86" height="24.86" alt="home"/>
                        <BackHomePage phone={isMobile}>回首頁</BackHomePage>
                    </BackHome>
                </Wrap>
            </HeaderBox>
        );
    }
}

export default header;