import { FlattenSimpleInterpolation } from 'styled-components';

import {
  Color,
  FontWeight,
  GenericMap,
  TextElement,
  TextType
} from '@/types';

export const colorProp = <PropTypes extends GenericMap>(color: Color) => (props: PropTypes): string => {
  let result = '';
  const testColor = props.theme.colors[color];

  if (color === Color.TRANSPARENT) {
    result = Color.TRANSPARENT as string;
  } else if (testColor && !testColor.includes('#') && !testColor.includes('rgba')) {
    result = props.theme.colors[testColor];
  } else if (testColor) {
    result = testColor;
  }

  return result;
};

export const fontWeightProp = <PropTypes extends GenericMap>(fontWeight: FontWeight) => (props: PropTypes): string => {
  const result = props.theme.fontWeights[fontWeight];

  return result;
};

export const fontTypeProp = <PropTypes extends GenericMap>(textType: TextType) => (props: PropTypes): FlattenSimpleInterpolation => {
  const result = props.theme.fontTypes[textType];

  return result;
};

export const isHeadline = (tag: TextElement): boolean => {
  const headlineTags = [
    TextElement.H1, TextElement.H2,
    TextElement.H3, TextElement.H4,
    TextElement.H5, TextElement.H6
  ];
  return (headlineTags.includes(tag));
};
