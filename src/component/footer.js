import React, { Component } from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
    width:100%;
    height:87px;
    background:transparent linear-gradient(90deg, #00829B 0%, #009583 100%);
`
const Wrap = styled.div`
    width:62.5%;
    height:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const FoInfo = styled.label`
    width:100%;
    text-align:center;
    font-family:'微軟正黑體';
    font-weight:100;
    color:#FFFFFD;
    font-size:20px;
`

class footer extends Component {
    render() {
        return (
            <FooterBox>
                <Wrap>
                    <FoInfo>版權所有 富邦人壽</FoInfo>
                    <FoInfo>最佳瀏覽狀態請使用:Chrome77,Safari 13,Firefox69版本以上</FoInfo>
                </Wrap>
            </FooterBox>
        );
    }
}

export default footer;