import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextPageContext  } from 'next';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import cookie from 'cookie';

import Button from '@/basic-components/Button';
import Div from '@/basic-components/Div';
import Modal from '@/basic-components/Modal';
import Text from '@/basic-components/Text';
import CompanyForm from '@/complex-components/CompanyForm';
import InventoryTable from '@/complex-components/InventoryTable';
import RemoveConfirmation from '@/complex-components/RemoveConfimation';
import ToastScreen from '@/complex-components/ToastScreen';
// import SendEmailForm from '@/complex-components/SendEmailForm';
import {
  ButtonType,
  Company,
  ModalState,
  TextElement,
  TextType
} from '@/types';
import { mq } from '@/styles/media';
import { AppDispatch } from '@/store';
import {
  setList,
  selectList,
  setEditCompanyId,
  setRemoveCompanyId,
  clearEditCompanyId,
  clearRemoveCompanyId
} from '@/slicers/companies';
import { companies as companiesService } from './api/services';
import { servicesStrs, paths } from '@/constants';

const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  padding-top: 2rem;

  ${mq('md', css`
    max-width: 720px;
  `)}

  ${mq('lg', css`
    max-width: 960px;
  `)}

  ${mq('xl', css`
    max-width: 1140px;
  `)}
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-top: 3rem;
`;

function getModalTitle(state: ModalState): string {
  let result = '';

  switch (state) {
    case ModalState.COMPANY_FORM:
      result = 'Company Form';
      break;
    case ModalState.SEND_EMAIL:
      result = 'Send Inventory';
      break;
    case ModalState.CONFIRM_DELETE:
      result = 'Confirm Removal';
      break;
  }

  return result;
}

export interface ModalContentProps {
  companyId?: string;
  state: ModalState;
  onClose?(): void;
}

const ModalContent: React.FC<ModalContentProps> = ({ state, onClose }) => {
  let content = null;

  switch (state) {
    case ModalState.COMPANY_FORM:
    case ModalState.COMPANY_EDIT:
      content = (<CompanyForm onClose={onClose} />);
      break;
    // case ModalState.SEND_EMAIL:
    //   content = (<SendEmailForm onClose={onClose} />);
    //   break;
    case ModalState.CONFIRM_DELETE:
      content = (<RemoveConfirmation onClose={onClose} />);
      break;
  }

  return (<>{content}</>);
};

export interface HomeProps {
  companies: Company[];
}

export default function Home(props: HomeProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [modalState, setModalState] = useState<ModalState>(ModalState.NONE);
  const companyList = useSelector(selectList);

  const openModalHandler = (state: ModalState) => {
    setModalState(state);
  };

  const closeModalHandler = () => {
    dispatch(clearEditCompanyId());
    dispatch(clearRemoveCompanyId());
    setModalState(ModalState.NONE);
  };

  const removeCompanyHandler = (id: string) => {
    dispatch(setRemoveCompanyId(id));
    setModalState(ModalState.CONFIRM_DELETE);
  };

  const editCompanyHandler = (id: string) => {
    dispatch(setEditCompanyId(id));
    setModalState(ModalState.COMPANY_EDIT);
  };

  useEffect(() => {
    dispatch(setList(props.companies));
  }, [props.companies]);

  const modalTitle = getModalTitle(modalState);

  return (
    <>
      <Head>
        <title>Inventory</title>
        <meta name="description" content="Inventory main page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Text as={TextElement.H2} type={TextType.LARGE_HEADING}>
          Table Of Companies
        </Text>
        <ButtonsContainer>
          <Button
            type={ButtonType.REGULAR}
            onClick={() => { openModalHandler(ModalState.COMPANY_FORM); }}
          >
            Add Company
          </Button>
          {/* <Button type={ButtonType.REGULAR}>
            Download Inventory
          </Button> */}
          {/* <Button
            type={ButtonType.REGULAR}
            onClick={() => { openModalHandler(ModalState.SEND_EMAIL); }}
          >
            Send Inventory
          </Button> */}
        </ButtonsContainer>
        <Div css={`margin-top: 3rem;`}>
          <InventoryTable
            data={companyList}
            onEdit={editCompanyHandler}
            onRemove={removeCompanyHandler}
          />
        </Div>
        <Modal
          title={modalTitle}
          open={modalState !== ModalState.NONE}
          onClose={closeModalHandler}
        >
          <ModalContent state={modalState} onClose={closeModalHandler}/>
        </Modal>
        <ToastScreen />
      </Container>
    </>
  );
}

export async function getServerSideProps({ req, res }: NextPageContext) {
  const cookies = cookie.parse(req?.headers.cookie ?? '');

  if (!cookies[servicesStrs.TOKEN_COOKIE]) {
    res?.writeHead(301, { Location: paths.AUTH });
    res?.end();
    return { props: {} };
  }


  const companiesResult = await axios.get(companiesService());

  const companies = companiesResult.data ?? [];

  return {
    props: {
      companies
    }
  };
}
