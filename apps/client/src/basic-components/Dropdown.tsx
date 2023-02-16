import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { Color } from '@/types';
import { colorProp } from '@/styles/utils';
import { hasInteractedWithElement } from '@/utils';
import { componentProps } from '@/constants';

const DropdownButton = styled.button<{ open?: boolean; }>`
  align-items: center;
  background-color: ${colorProp(Color.GRAY_900)};
  border-radius: 0.4rem;
  color: ${colorProp(Color.WHITE)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
  position: relative;
  transition: background-color .2s ease;

  ${ifProp(componentProps.OPEN, css`
    background-color: ${colorProp(Color.GRAY_800)};
  `)}
`;

const DropdownContainer = styled.ul<{ open?: boolean; }>`
  background-color: ${colorProp(Color.GRAY_700)};
  border-radius: 0.4rem;
  box-shadow: 0px 4px 4px ${colorProp(Color.DIM)};
  display: none;
  flex-direction: column;
  position: absolute;
  min-height: 6.9rem;
  min-width: 18rem;
  padding: 0.6rem 0.4rem;
  right: 0;
  row-gap: 0.1rem;
  top: calc(100% + 0.3rem);

  ${ifProp(componentProps.OPEN, css`
    display: flex;
  `)}
`;

export interface DrowpdownItemProps {
  displayOnly?: boolean;
  onClick?(): void;
}

const PreStyledDropdownItem = styled.li<DrowpdownItemProps>``;

export const DropdownItem = styled(PreStyledDropdownItem).attrs((props: DrowpdownItemProps) => ({
  tabIndex: (props.displayOnly) ? '-1' : '0'
}))`
  align-items: center;
  border-radius: 0.3rem;
  color: ${colorProp(Color.WHITE)};
  cursor: pointer;
  display: flex;
  height: 2.8rem;
  min-width: 17.2rem;
  padding: 0.5rem 1rem;
  transition: background-color .2s ease;

  &:hover {
    background-color: ${colorProp(Color.GRAY_800)};
  }

  ${ifProp(componentProps.DISPLAY_ONLY, css`
    color: ${colorProp(Color.GRAY_400)};
    cursor: auto;

    &:hover {
      background-color: ${colorProp(Color.TRANSPARENT)};
    }
  `)}
`;

export interface DropdownProps {
  buttonContent: React.ReactNode;
  children?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    buttonContent,
    children
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [openByClick, setOpenByClick] = useState(false);
  const elementRef = useRef<HTMLUListElement>();

  const clickOutsideHandler = (e: MouseEvent): void => {
    const target = e.target as Node;

    if (!isOpen || !target) { return; }

    if (openByClick) {
      setOpenByClick(false);
      return;
    }

    const interactedWithElement = hasInteractedWithElement(
      target,
      elementRef.current as Node
    );

    if (!interactedWithElement) {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setOpenByClick(true);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', clickOutsideHandler);

      return () => {
        document.removeEventListener('click', clickOutsideHandler);
      };
    }
  }, [isOpen, openByClick]);

  return (
    <DropdownButton open={isOpen} onClick={toggleHandler}>
      {buttonContent}
      <DropdownContainer open={isOpen} ref={(e: HTMLUListElement) => { elementRef.current = e; }}>
        {children}
      </DropdownContainer>
    </DropdownButton>
  );
};

export default Dropdown;
