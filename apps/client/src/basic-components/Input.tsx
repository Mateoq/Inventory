import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import ReactInputMask from "react-input-mask";

import { Color, InputType, TextType } from "@/types";
import { colorProp, fontTypeProp } from "@/styles/utils";
import { componentProps } from "@/constants";

export interface InputProps {
  error?: boolean;
  type: InputType;
}

const inputStyles = css`
  ${fontTypeProp(TextType.PARAGRAPH)};

  background-color: ${colorProp(Color.GRAY_700)};
  border: 0.1rem solid ${colorProp(Color.GRAY_700)};
  border-radius: 0.4rem;
  color: ${colorProp(Color.WHITE)};
  height: 3.8rem;
  min-width: 26.8rem;
  padding: 1rem 0.7rem;
  transition: border-color .2s ease;

  &:active,
  &:focus {
    border-color: ${colorProp(Color.GRAY_900)};
    outline: 0;
  }

  ${ifProp(componentProps.ERROR, css`
    border-color: ${colorProp(Color.ERROR)};

    &:active,
    &:focus {
      border-color: ${colorProp(Color.ERROR)};
      outline: 0;
    }
  `)}
`;

export const InputMasked = styled(ReactInputMask)<InputProps>`
  ${inputStyles}
`;

export const Input = styled.input<InputProps>`
  ${inputStyles}
`;
