import React from 'react';
import styled from 'styled-components';
import { BiEdit, BiX } from 'react-icons/bi';

import Div from '@/basic-components/Div';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@/basic-components/Table';
import Text from '@/basic-components/Text';
import {
  Color,
  CompanyMap,
  TextElement,
  TextType
} from '@/types';
import { colorProp } from '@/styles/utils';

const ButtonIcon = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const EditIcon = styled(BiEdit)`
  fill: ${colorProp(Color.WHITE)};
  height: 2.4rem;
  width: 2.4rem;
  transition: fill .2s ease;

  ${ButtonIcon}:hover & {
    fill: ${colorProp(Color.GRAY_400)};
  }
`;

const RemoveIcon = styled(BiX)`
  fill: ${colorProp(Color.WHITE)};
  height: 3rem;
  width: 3rem;
  transition: fill .2s ease;

  ${ButtonIcon}:hover & {
    fill: ${colorProp(Color.GRAY_400)};
  }
`;

export interface DataTableProps {
  companies: CompanyMap;
  onRemove?(id: string):  void;
  onEdit?(id: string):  void;
}

const DataTable: React.FC<DataTableProps> = (props) => {
  const { companies, onRemove, onEdit } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell isHeading>
            Name
          </TableCell>
          <TableCell isHeading>
            Address
          </TableCell>
          <TableCell isHeading>
            Nit
          </TableCell>
          <TableCell isHeading>
            Phone
          </TableCell>
          <TableCell isHeading>
            Edit
          </TableCell>
          <TableCell isHeading>
            Remove
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.values(companies).map(({ id, name, address, nit, phone }) => (
          <TableRow key={`company_${id}`}>
            <TableCell>
              {name}
            </TableCell>
            <TableCell>
              {address}
            </TableCell>
            <TableCell>
              {nit}
            </TableCell>
            <TableCell>
              {phone}
            </TableCell>
            <TableCell>
              <ButtonIcon onClick={() => { onEdit && onEdit(id); }}>
                <EditIcon/>
              </ButtonIcon>
            </TableCell>
            <TableCell>
              <ButtonIcon onClick={() => { onRemove && onRemove(id); }}>
                <RemoveIcon/>
              </ButtonIcon>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const NoCompanies: React.FC = () => {
  return (
    <Div css={`display: flex; justify-content: center;`}>
      <Text as={TextElement.PARAGRAPH} type={TextType.HEADING2}>
        No Companies available...
      </Text>
    </Div>
  );
};

export interface InventoryTableProps {
  data: CompanyMap;
  onRemove?(id: string): void;
  onEdit?(id: string): void;
}

const InventoryTable: React.FC<InventoryTableProps> = (props) => {
  const { data, onRemove, onEdit } = props;

  return (
    <>
      {(Object.values(data).length > 0)
        ? (<DataTable companies={data} onRemove={onRemove} onEdit={onEdit}/>)
        : (<NoCompanies/>)
      }
    </>
  );
};

export default InventoryTable;
