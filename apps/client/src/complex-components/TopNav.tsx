import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { BiMenu } from 'react-icons/bi';

import Dropdown, { DropdownItem } from '@/basic-components/Dropdown';
import Text from '@/basic-components/Text';
import { Color, TextElement, TextType } from '@/types';
import { AppDispatch } from '@/store';
import logout from '@/thunks/logout';
import { colorProp } from '@/styles/utils';
import { paths } from '@/constants';

const Container = styled.nav`
  align-items: center;
  background-color: ${colorProp(Color.GRAY_900)};
  display: flex;
  height: 4.5rem;
  justify-content: space-between;
  padding: 0.5rem 1.2rem;
  width: 100vw;
`;

const MenuIcon = styled(BiMenu)`
  height: 2.4rem;
  width: 2.4rem;
`;

const TopNav: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = async () => {
    const result = await dispatch(logout()).unwrap();
    console.log('result', result);

    if (result.success) {
      location.href = paths.AUTH;
    }
  };

  return (
    <Container>
      <Text as={TextElement.H1} type={TextType.HEADING1}>
        Inventory
      </Text>
      <Dropdown buttonContent={<MenuIcon/>}>
        <DropdownItem displayOnly>
          quinterom1592@gmail.com
        </DropdownItem>
        <DropdownItem onClick={logoutHandler}>
          Log Out
        </DropdownItem>
      </Dropdown>
    </Container>
  );
};

export default TopNav;
