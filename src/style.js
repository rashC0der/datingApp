const { default: styled } = require('styled-components');

const AppWrapper = styled.div.withConfig({
    displayName: 'AppWrapper'
  })`
  @media (max-width: 767px) {
    grid-template-columns:repeat(4 , 1fr);
  }
    box-sizing: border-box;
    display:grid;
    grid-template-columns:repeat(12 , 1fr);
    height:100vh;
    margin:0px;
    align-items:center;
    background-image: linear-gradient(pink, gray)
   
  `;

  export {
    AppWrapper
  }