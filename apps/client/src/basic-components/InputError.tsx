import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

import {
  Color,
  TextType
} from "@/types";
import { colorProp, fontTypeProp } from "@/styles/utils";
import { componentProps } from "@/constants";

const InputError = styled.span<{ show?: boolean }>`
  ${fontTypeProp(TextType.CAPTION)};

  color: ${colorProp(Color.ERROR)};
  padding: 0.2rem 0.2rem 0;
  opacity: 0;
  visibility: hidden;

  ${ifProp(componentProps.SHOW, css`
    opacity: 1;
    visibility: visible;
  `)}
`;

export default InputError;
