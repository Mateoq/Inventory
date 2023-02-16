import styled, { css } from "styled-components";
import {
  ifProp,
  prop,
  switchProp
} from 'styled-tools';

import {
  Color,
  FontWeight,
  TextAlignment,
  TextElement,
  TextType
} from '@/types';
import {
  colorProp,
  fontTypeProp,
  fontWeightProp,
  isHeadline
} from "@/styles/utils";
import { componentProps } from '@/constants';

export interface TextProps {
  as?: string;
  type: TextType;
  alignment?: TextAlignment;
  css?: string;
  colorInherit?: boolean;
  isContent?: boolean;
  underlined?: boolean;
  weight?: FontWeight;
  ellipsis?: boolean;
}

const PreStyledText = styled.span<TextProps>``;

const Text = styled(PreStyledText).attrs((props: TextProps) => ({
  isHeadline: isHeadline(props.as as TextElement)
}))`
  /* Type styles */
  ${({ type }) => fontTypeProp(type)}

  ${switchProp(componentProps.AS, {
    [TextElement.EMPHASIS]: css`
      font-style: italic;
    `,
    [TextElement.STRONG]: css`
      font-weight: ${fontWeightProp(FontWeight.BOLD)};
    `,
    [TextElement.DELETE]: css`
      text-decoration: line-through;
    `
  })}

  color: ${colorProp(Color.WHITE)};
  font-weight: ${({ weight = FontWeight.REGULAR }) => fontWeightProp(weight)};
  text-align: ${prop(componentProps.ALIGNMENT, TextAlignment.LEFT)};

  ${ifProp(componentProps.UNDERLINED, css`
    text-decoration: underline;
  `)}

  ${ifProp(componentProps.ELLIPSIS, css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)}
`;

export default Text;
