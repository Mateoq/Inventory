import { css } from "styled-components";

export const breakpoints = {
  xSmall: 0,
  small: 768,
  medium: 1024,
  large: 1280,
  xLarge: 1440
};

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

export const fontNames = {
  mono: 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  roboto: 'Roboto'
};

export const fontTypes = {
  largeHeading: css`
    font-size: 4rem;
    line-height: 4.8rem;
  `,
  heading1: css`
    font-size: 3rem;
    line-height: 3.9rem;
  `,
  heading2: css`
    font-size: 2.4rem;
    line-height: 3.1rem;
  `,
  heading3: css`
    font-size: 2rem;
    line-height: 2.6rem;
  `,
  paragraph: css`
    font-size: 1.6rem;
    line-height: 2.4rem;
  `,
  paragraph2: css`
    font-size: 1.4rem;
    line-height: 1.7rem;
  `,
  caption: css`
    font-size: 1.1rem;
    line-height: 1.2rem;
  `
};

export const colors = {
  black: '#000',
  white: '#FFF',
  error: '#CF6679',
  gray900: '#212121',
  gray800: '#424242',
  gray700: '#616161',
  gray600: '#757575',
  gray500: '#9E9E9E',
  gray400: '#BDBDBD',
  gray300: '#E0E0E0',
  gray200: '#EEEEEE',
  gray100: '#F5F5F5',
  gray50: '#FAFAFA',
  dim: 'rgba(0, 0, 0, 0.25)'
};
