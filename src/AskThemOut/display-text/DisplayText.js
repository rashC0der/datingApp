import React from 'react'
import {DisplayTextWrapper} from "./style"
const DisplayText=({text ,className})=>{
    return(
        <DisplayTextWrapper className={className}>{text}</DisplayTextWrapper>
    )
}
export default DisplayText