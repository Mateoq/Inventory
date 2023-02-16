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

const Overlay = styled.div<{ open?: boolean; }>`
  align-items: center;
  background-color: rgba(0,0,0,0.4);
  display: none;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;

  ${ifProp(componentProps.OPEN, css`
    display: flex;
  `)}
`;

const Container = styled.div`
  background-color: ${colorProp(Color.GRAY_900)};
  border-radius: 0.4rem;
  box-shadow: 0px 4px 4px ${colorProp(Color.DIM)};
  display: flex;
  flex-direction: column;
  min-height: 14rem;
  width: 40rem;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  border-bottom: 0.1rem solid ${colorProp(Color.GRAY_800)};
  height: 2.8rem;
  justify-content: space-between;
  padding: 0.4rem 0.6rem 0.4rem 1rem;
  width: 100%;
`;

const CloseButton = styled.button`
  height: 2rem;
  width: 2rem;
`;

const CloseIcon = styled(BiX)`
  fill: ${colorProp(Color.WHITE)};
  height: 100%;
  transition: fill .2s ease;
  width: 100%;

  ${CloseButton}:hover & {
    fill: ${colorProp(Color.GRAY_500)};
  }
`;

export interface ModalProps {
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  onClose?(): void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, open, title, onClose } = props;

  return (
    <Overlay open={open}>
      <Container>
        <Header>
          <Text as={TextElement.H3} type={TextType.PARAGRAPH2}>
            {title}
          </Text>
          <CloseButton onClick={() => { onClose && onClose(); }}>
            <CloseIcon/>
          </CloseButton>
        </Header>
        {children}
      </Container>
    </Overlay>
  );
};

export default Modal;
