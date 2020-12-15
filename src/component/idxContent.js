import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../dataModule/card.json'

//載入所有照片
function importAllPic(r) {
    let images = {};
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item);});
    return images;
}
const images = importAllPic(require.context('../images/instructions/web', true, /^\.\/.*\.png$/));
const phone_img =  importAllPic(require.context('../images/instructions/mobile', true, /^\.\/.*\.png$/));
const icons = importAllPic(require.context('../images', true, /^\.\/.*\.svg$/));

const Wrap = styled.div`
    width:${props=>props.phone?'100%':'62.5%'};
    height:calc( 100% - 8px);
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:${props=>props.phone?'65px':'90px'} 0 ${props=>props.phone?'0px':'28px'} 0;
    @media (max-width: 900px) {
        width:90%;
    }
    @media (max-width: 500px) {
        width:100%;
    }
`
const CardBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:${props=>props.phone?'column':'row'};
    padding:25px 0;
    background:#fff;
    border-bottom:1px ${props=>props.bottomLine} #D5D5D5;
    border-width: 2px;
`
const IdxWords =  styled.div`
    margin-bottom:${props=>props.phone?'30px':'0'};
    flex:0 0 29.4%;
`
const IdxImg = styled.img`
    display:block;
    max-width: 100%;
    height:auto;
    flex:${props=>props.phone?'0 0 73.671%':'0 0 67.5%'};
    margin:${props=>props.phone?'auto':'none'};
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
`

const MainTitle = styled.h3`
    position:relative;
    z-index:1;
    width:100%;
    font-family:${props=>props.bottomLine?'':'Source Sans Pro'};
    font-weight:${props=>props.bottomLine?'bold':'normal'};
    font-size:${props=>props.bottomLine?'24px':'27px'};
    background:#fff;
    color:#00829B;
    line-height:38px;
    box-sizing:border-box;
    padding:9px 0 0 29.93px;
    border-bottom:${props=>props.bottomLine?'2px dashed #D5D5D5':'none'};
    padding-bottom:${props=>props.bottomLine?'11.2px':'none'};
    &:before {
        content:"";
        display:block;
        width:8px;
        height:24px;
        background:#00829B;
        position:absolute;
        z-index:1;
        top:${props=>props.bottomLine?'15px':'16px'};
        left:15px;
    }

`
const CardTitle = styled.h4`
    position:relative;
    font-size:18px;
    width:100%;
    color:#F55A08;
    box-sizing: border-box;
    padding:0 0 0 45px;
    &:before {
        content:"";
        display:block;
        width:0;
        height:0;
        border-left:12.93px solid ${props=>props.show?'#F55A08':'transparent'};
        border-top:7.5px solid transparent;
        border-bottom:7.5px solid transparent;
        position:absolute;
        z-index:1;
        top:5px;
        left:16px;
    }
`

const CardContent = styled.div`
    color:#505050;
    width:90%;
    font-size:18px;
    font-weight:600;
    box-sizing: border-box;
    padding:0 0 0 45px;
    letter-spacing:1px;
`

const IconImg = styled.img`
    position:relative;
    top:3px;
    display:inline-block;
    width:22.68px;
    line-height:22.15px
`
const Seq = styled.span`
    position:relative;
    margin:0 15px 0 0;
    &:before {
        content:'${props=> props.no}';
        display:inline-block;
        position:absolute;
        z-index:1;
        top:0;
        left:-30px;
        width:37px;
        height:19px;
        background:#F55A08;
        border-radius: 5px;
        text-align:center;
        color:#fff;
    }
`

const IdxImgBox = styled.div`
    flex:${props=> props.phone?'0 0 73.671%':'0 0 67.5%'}; 
    width:${props=> props.phone? '73.671%':'67.5%'};
    margin:auto;
`

class idxContent extends Component {
    convertIcon = (array,fn,no) =>{
        if(no){
            var result = [];
            for (let i = 0; i < array.length; i++) {
                if(i=== 0){
                    result = result.concat(fn(1));
                }else{
                    result = result.concat(fn(array[i]));
                }
            }
            return result;
        }else{
            var result = [];
            for (let i = 0; i < array.length; i++) {
                result = result.concat(fn(array[i]));
            }
            return result;
        }
    }
    produce_icon_jsx = (words,icon,no) => {
        if(icon && no){//有icon有數字
            words.text = this.convertIcon(words.text.split(/{no}|{icon}/), function (part) {
                if(part == 1){
                    return [part, <Seq key={words.no_seq} no={no}></Seq>];
                }else{
                    return [part, <IconImg src={icons[icon]} key={words.text_no} width="auto" height="auto" alt="WebIdx"></IconImg>];
                }
            },no);
            words.text.pop();
            words.text.shift();
        }else if(!icon && no){//沒有icon有數字
            words.text = this.convertIcon(words.text.split('{no}'), function (part) {
                return [part, <Seq no={no} key={words.no_seq}></Seq>];
            });
            // Remove the last spacer
            words.text.pop();
        }else if(icon && !no){//有icon沒有數字
            words.text = this.convertIcon(words.text.split('{icon}'), function (part) {
                return [part, <IconImg src={icons[icon]} key={words.text_no} width="auto" height="auto" alt="WebIdx"></IconImg>];
            });
            // Remove the last spacer
            words.text.pop();
        }
    }
    showIcon= (words) =>{
        if(words.icon_no === 'e' && words.no){//有編輯符號有數字
            this.produce_icon_jsx(words,"edit_btn.svg",words.no);
            return;
        }else if(words.icon_no === 'd' && words.no){//有刪除符號有數字
            this.produce_icon_jsx(words,"delete_btn.svg",words.no);
            return;
        }else if(!words.icon_no && words.no){//沒有icon有數字
            this.produce_icon_jsx(words,false,words.no);
        }else if(words.icon_no === 'e' && !words.no){//有編輯符號沒有數字
            this.produce_icon_jsx(words,"edit_btn.svg",false);
            return;
        }else if(words.icon_no === 'd' && !words.no){//有刪除符號沒有數字
            this.produce_icon_jsx(words,"delete_btn.svg",false);
            return;
        }else{
            return
        }
    }
    render() {
        const isMobile = window.screen.width < 500;
        const cards =isMobile ? Card.phone_pic : Card.pic_info; 
        const title = isMobile ? Card.phone_title : Card.web_title;
        
        return (
            <Wrap phone={isMobile} >
                <MainTitle phone={isMobile} bottomLine={title.bottom_line}>{title.title}</MainTitle>
                {cards.map((info,key)=>
                    (
                        <CardBox key={info.step_desc} bottomLine={info.bottom_line?"dashed":"none"} phone={isMobile}>
                            <IdxWords phone={isMobile}>
                                <CardTitle show={info.step_desc} phone={isMobile}>{info.step_desc}</CardTitle>
                                    {info.step_content.map((content,key)=>{
                                            this.showIcon(content);
                                            return <CardContent key={content.text} phone={isMobile}>{content.text}</CardContent>
                                    })}
                            </IdxWords>
                            <IdxImgBox phone={isMobile}>
                                <IdxImg src={isMobile?phone_img[`mobile${key+1}.png`]:images[`web${key+1}.png`]} width="auto" height="auto" alt="WebIdx" phone={isMobile}></IdxImg>
                            </IdxImgBox>
                        </CardBox> 
                    )
                )}
            </Wrap>
        );
    }
}

export default idxContent;