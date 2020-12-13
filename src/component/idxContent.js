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
const icons = importAllPic(require.context('../images', true, /^\.\/.*\.svg$/));

const Wrap = styled.div`
    width:62.5%;
    height:calc( 100% - 8px);
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:90px 0 28px 0;
`
const CardBox = styled.div`
    width:100%;
    display:flex;
    padding:25px 0;
    background:#fff;
    border-bottom:1px ${props=>props.bottomLine} #D5D5D5;
    border-width: 2px;
`
const IdxWords =  styled.div`
    flex:0 0 29.4%;
`
const IdxImg = styled.img`
    display:block;
    max-width:67.5%;
    flex:0 0 67.5%;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
`

const MainTitle = styled.h3`
    position:relative;
    z-index:1;
    width:100%;
    font-family:'Source Sans Pro';
    font-weight:normal;
    font-size:27px;
    background:#fff;
    color:#00829B;
    line-height:38px;
    box-sizing:border-box;
    padding:9px 0 0 29.93px;
    &:before {
        content:"";
        display:block;
        width:8px;
        height:24px;
        background:#00829B;
        position:absolute;
        z-index:1;
        top:16px;
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
        left:8.5px;
    }
`

const CardContent = styled.div`
    color:#505050;
    width:85%;
    font-size:18px;
    font-weight:600;
    box-sizing: border-box;
    padding:0 0 0 45px;
    letter-spacing:1px;
`

const IconImg = styled.img`
    position:relative;
    top:3px;
    diplay:inline-block;
    width:22.68px;
    line-height:22.15px
`
const Seq = styled.span`
    position:relative;
    margin:0 5px 0 0;
    &:before {
        content:'${props=> props.no}';
        display:inline-block;
        position:absolute;
        z-index:1;
        top:0;
        left:-38px;
        width:37px;
        height:19px;
        background:#F55A08;
        border-radius: 5px;
        text-align:center;
        color:#fff;
    }
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
        const cards = Card.pic_info; 
        return (
            <Wrap>
                <MainTitle>變更流程</MainTitle>
                {cards.map((info,key)=>
                    (
                        <CardBox key={info.step_desc} bottomLine={info.bottom_line?"dashed":"none"}>
                            <IdxWords >
                                <CardTitle show={info.step_desc}>{info.step_desc}</CardTitle>
                                    {info.step_content.map((content,key)=>{
                                            this.showIcon(content);
                                            return <CardContent key={content.text}>{content.text}</CardContent>
                                    })}
                            </IdxWords>
                            <IdxImg src={images[`web${key+1}.png`]} width="auto" height="auto" alt="WebIdx"></IdxImg>
                        </CardBox> 
                    )
                )}
            </Wrap>
        );
    }
}

export default idxContent;