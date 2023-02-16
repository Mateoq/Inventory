import {
  breakpoints,
  colors,
  fontNames,
  fontTypes,
  fontWeights
} from './values';

export interface InvTheme {
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  fontNames: typeof fontNames;
  fontTypes: typeof fontTypes;
  fontWeights: typeof fontWeights;
}

const theme: InvTheme = {
  breakpoints,
  colors,
  fontNames,
  fontTypes,
  fontWeights
};

export default theme;
