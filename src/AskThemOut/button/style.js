const { default: styled } = require('styled-components');

const ButtonWrapper = styled.button.withConfig({
    displayName: 'ButtonWrapper'
  })`
    width: 100px;
    height: 40px;
    background-image: linear-gradient(#3c3c3c, #b4b4b4);
    border-radius:12px;
  `;

  export{
    ButtonWrapper
  }