import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

import { Color, TextType } from "@/types";
import { colorProp, fontTypeProp } from "@/styles/utils";
import { componentProps } from "@/constants";

const LabelContainer = styled.label`
  column-gap: 0.3rem;
  display: flex;
  flex-direction: column;
  max-width: 26.8rem;
`;

const LabelText = styled.span<{ error?: boolean; }>`
  ${fontTypeProp(TextType.PARAGRAPH2)};

  color: ${colorProp(Color.WHITE)};
  cursor: pointer;
  transition: color .2s ease;

  ${ifProp(componentProps.ERROR, css`
    color: ${colorProp(Color.ERROR)};
  `)}
`;

export interface LabelProps {
  error?: boolean;
  text: string;
  children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = (props) => {
  const { error, text, children } = props;

  return (
    <LabelContainer>
      <LabelText error={error}>
        {text}
      </LabelText>
      {children}
    </LabelContainer>
  );
};

export default Label;
