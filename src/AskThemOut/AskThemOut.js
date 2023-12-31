import React from 'react'
import{useState, useEffect} from 'react'
import DisplayText from "./display-text/DisplayText"
import {AskThemOutWrapper,ButtonWrapper} from './style'
import Image from "./image/Image"
import Button from "./button/Button"
import Card from "../NewYearCard/card/Card"
const AskThemOut=()=>{
    const[width, setWidth]=useState(0)
    const[height, setHeight]=useState(0)
    const[style, setStyle]=useState({})
    const[src , setSrc]=useState("https://media.tenor.com/rzFoh93VHMgAAAAi/love.gif")
    const[text, setText]=useState("Hey!!! will you care to go for a dinner date ?")
    const[cardDisplay ,setCardDisplay]= useState(false)
    const initialText="Hey!!! will you care to go for a dinner date ?"
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
    const noBtnMouseOver=(height, width)=>{
        const randomHeight=getRandomInt(0,height);
        const randomWidth=getRandomInt(0,width-150);
        setStyle({top:`${randomHeight}px` ,left: `${randomWidth}px`});
        if(initialText!==text){
            setSrc("https://media.tenor.com/rzFoh93VHMgAAAAi/love.gif")
            setText(initialText)
        }
        
      
    }
    const yesBtnOnclick=()=>{
        setSrc("https://media.tenor.com/nPJiULZnc-8AAAAi/github-sticker.gif")
        setText("Awwwww, Thats so sweet of you!!!")
       
    }
    const CardDisplay=()=>{
        setCardDisplay(true)
    }
    useEffect(()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    },[height,width])
    return(
        cardDisplay?<Card/>:
        <AskThemOutWrapper>
           <DisplayText text={text}/>
           {initialText!==text &&<Button className="wish-btn" onClick={()=>{CardDisplay()}}>Click me Please </Button>}
           <Image src={src}/>
           <ButtonWrapper className='btn-grp'>
                <Button className="reachable" onClick={()=>{yesBtnOnclick()}}>Yes</Button>
                <Button style={style} className='notReachable' onClick={()=>{noBtnMouseOver(height, width)}}>No</Button>
                <DisplayText className="displayonhover" text=" Thanks for the yes, but did you try clicking no"/>
           </ButtonWrapper>           
        </AskThemOutWrapper>
        
    )
}

export default AskThemOut
