const { default: styled } = require('styled-components');

const ImageWrapper = styled.div.withConfig({
    displayName: 'ImageWrapper'
  })`       
            img{
               display:block;
               margin:auto;
               height:300px;
           }
          
  `;

  export{
    ImageWrapper
  }