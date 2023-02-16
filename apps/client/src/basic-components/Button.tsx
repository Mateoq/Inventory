import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import {
  Color,
  FontWeight,
  TextType
} from '@/types';
import {
  colorProp,
  fontTypeProp,
  fontWeightProp
} from '@/styles/utils';
import { componentProps } from '@/constants';

export interface ButtonProps {
  children?: React.ReactNode;
  secondary?: boolean;
}

const PreStyledButton = styled.button<ButtonProps>``;

const Button = styled(PreStyledButton)`
  ${fontTypeProp(TextType.PARAGRAPH)};

  align-items: center;
  background-color: ${colorProp(Color.GRAY_900)};
  border-radius: 0.4rem;
  color: ${colorProp(Color.WHITE)};
  display: flex;
  height: 3.2rem;
  justify-content: center;
  min-width: 8rem;
  padding: 0.5rem 2rem;
  transition: background-color .2s ease;

  &:hover {
    background-color: ${colorProp(Color.GRAY_700)};
  }

  &:disabled {
    cursor: auto;
    opacity: 0.7;

    &:hover {
      background-color: ${colorProp(Color.GRAY_900)};
    }
  }

  ${ifProp(componentProps.SECONDARY, css`
    background-color: ${colorProp(Color.GRAY_500)};
    color: ${colorProp(Color.GRAY_900)};
    font-weight: ${fontWeightProp(FontWeight.MEDIUM)};

    &:hover {
      background-color: ${colorProp(Color.GRAY_600)};
    }

    &:disabled {
      &:hover {
        background-color: ${colorProp(Color.GRAY_500)};
      }
    }
  `)}
`;

export default Button;
