import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/basic-components/Button';
import Div from '@/basic-components/Div';
import Text from '@/basic-components/Text';
import { ButtonType, TextElement, TextType } from '@/types';
import { AppDispatch } from '@/store';
import { selectRemoveCompanyId, removeCompany, clearRemoveCompanyId } from '@/slicers/companies';
import { openToast, closeToast } from '@/slicers/toast';
import deleteCompany from '@/thunks/deleteCompany';
import { sleep } from '@/utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  row-gap: 2rem;
`;

export interface RemoveConfirmationProps {
  onClose?(): void;
}

const RemoveConfirmation: React.FC<RemoveConfirmationProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const removeId = useSelector(selectRemoveCompanyId);

  const removeHandler = async () => {
    console.log('ID', removeId);
    if (removeId) {
      try {
        await dispatch(deleteCompany({ id: removeId })).unwrap();
        dispatch(removeCompany(removeId));
        dispatch(openToast('Company deleted!!'));
        await sleep(3000);
        dispatch(closeToast());
      } catch (err) {
        console.error(err);
        dispatch(openToast('Error while deleting company'));
        await sleep(3000);
        dispatch(closeToast());
      } finally {
        dispatch(clearRemoveCompanyId());
      }
    }

    onClose && onClose();
  };

  return (
    <Container>
      <Text as={TextElement.PARAGRAPH} type={TextType.PARAGRAPH}>
        Are you sure?
      </Text>
      <Div css={`display: flex; column-gap: 2.5rem;`}>
        <Button
          type={ButtonType.REGULAR}
          secondary
          onClick={removeHandler}
        >
          Accept
        </Button>
        <Button
          type={ButtonType.REGULAR}
          secondary
          onClick={() => onClose && onClose()}
        >
          Cancel
        </Button>
      </Div>
    </Container>
  );
};

export default RemoveConfirmation;
