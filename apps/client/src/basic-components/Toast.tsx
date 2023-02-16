import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { BiX } from 'react-icons/bi';

import Text from './Text';
import {
  Color,
  TextElement,
  TextType
} from '@/types';
import { colorProp } from '@/styles/utils';
import { componentProps } from '@/constants';

const ToastContainer = styled.div<{ show?: boolean; }>`
  align-items: center;
  background-color: ${colorProp(Color.GRAY_900)};
  border-radius: 0.4rem;
  box-shadow: 0px 4px 4px ${colorProp(Color.DIM)};
  display: none;
  height: 13rem;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  right: 2rem;
  top: 6.5rem;
  width: 25rem;
  z-index: 99999;

  ${ifProp(componentProps.SHOW, css`
    display: flex;
  `)}
`;

const ToastClose = styled.button`
  align-items: center;
  display: flex;
  height: 2rem;
  justify-content: center;
  right: 0;
  position: absolute;
  top: 0;
  width: 2rem;
`;

const ToastCloseIcon = styled(BiX)`
  fill: ${colorProp(Color.WHITE)};
  height: 100%;
  transition: fill .2s ease;
  width: 100%;

  ${ToastClose}:hover & {
    fill: ${colorProp(Color.GRAY_500)};
  }
`;

export interface ToastProps {
  message: string;
  show?: boolean;
  onClose?(): void;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { message, show, onClose } = props;
  return (
    <ToastContainer show={show}>
      <ToastClose onClick={() => { onClose && onClose(); }}>
        <ToastCloseIcon/>
      </ToastClose>
      <Text as={TextElement.PARAGRAPH} type={TextType.PARAGRAPH2}>
        {message}
      </Text>
    </ToastContainer>
  );
};

export default Toast;
