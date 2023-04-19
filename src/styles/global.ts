import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins';
  }
  button{
    cursor: pointer;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.DARK100};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  /* .active {
    color: ${({ theme }) => theme.COLORS.SECONDARY}
  } */
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
  }
  
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }
`;
