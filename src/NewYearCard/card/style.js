const { default: styled } = require('styled-components');

const CardWrapper = styled.div.withConfig({
    displayName: 'CardWrapper'
  })`
  
    @media (max-width: 767px) {
      grid-column:1/-1;
    }
    grid-column:4/10;
  
   
  `;

  export{
    CardWrapper
  }