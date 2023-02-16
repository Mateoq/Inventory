import { createGlobalStyle } from 'styled-components';

import { Color } from '@/types';
import { colorProp } from './utils';


const GlobalStyles = createGlobalStyle`
   html {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fontNames.roboto};
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colorProp(Color.GRAY_800)};

    &,
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      clear: both;
      font-family: ${({ theme }) => theme.fontNames.roboto};
      margin: 0;
      padding: 0;
    }
  }

  a,
  button {
    background: none;
    border: 0;
    cursor: pointer;
    text-decoration: none;

    &:active,
    &:focus {
      outline: 0;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
