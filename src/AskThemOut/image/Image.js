import React from 'react'
import {ImageWrapper} from './style'
const Image=({src})=>{
    console.log('src,', src)
    return(
        <ImageWrapper>
              <img src={src} alt="Paris"/>
        </ImageWrapper>
      
    )
}

export default Image