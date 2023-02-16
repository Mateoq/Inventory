import { FlattenSimpleInterpolation, css } from 'styled-components';

export const breakpoints = {
  sm: 425,
  md: 768,
  lg: 1024,
  lgm: 1150,
  lgl: 1250,
  xl: 1440
};

export type Breakpoint = keyof typeof breakpoints;

export const mq = (key: Breakpoint, style: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${breakpoints[key]}px) {
      ${style}
    }
  `;
};
