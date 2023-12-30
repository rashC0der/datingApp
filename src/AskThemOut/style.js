const { default: styled } = require('styled-components');

const AskThemOutWrapper = styled.div.withConfig({
    displayName: 'AskThemOutWrapper'
  })`
           
            @media (max-width: 767px) {
              grid-column:1/-1;
            }
            grid-column:4/10;
            min-height:300px;
            .reachable{
              margin-right:30px;
            }
            Button.notReachable{
              position:absolute;
            }
            
            .displayonhover{
              background:pink;
              border-radius:12px; 
              display:none;
              position:absolute;
              width:150px;
              top:50%;
              left:25%;
              font-size:20px;
              @media (min-width:768px) and (max-width: 1024px) {
              left:15%;
              }
              @media (min-width:368px) and (max-width: 767px) {
                top:50%;
              left:10%;
              }
              @media (max-width: 367px) {
                top:50%;
              left:0%;
              }
            }
            .reachable:hover~.displayonhover{
              display:block;
              animation: seconds 2.3s ease-in-out forwards;
             }
          
            @keyframes seconds {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }

             
            
  `;


const ButtonWrapper = styled.div.withConfig({
    displayName: 'ButtonWrapper'
  })`
  `;


export{
    AskThemOutWrapper,
    ButtonWrapper
  }