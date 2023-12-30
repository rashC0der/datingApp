const { default: styled } = require('styled-components');

const DisplayTextWrapper = styled.div.withConfig({
    displayName: 'DisplayTextWrapper'
  })`
    text-align:center;
    font-family: 'Sevillana', cursive;
    font-size:25px;
  `;

  export{
    DisplayTextWrapper
  }