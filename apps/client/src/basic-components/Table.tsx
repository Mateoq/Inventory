import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { Color, FontWeight, TextType } from '@/types';
import { colorProp, fontTypeProp, fontWeightProp } from '@/styles/utils';
import { componentProps } from '@/constants';

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  min-width: 65rem;
`;

export const TableHead = styled.thead`
  display: table-header-group;
`;

export const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
`;

export interface TableCellProps {
  isHeading?: boolean;
}

const PreStyledCell = styled.td<TableCellProps>``;

export const TableCell = styled(PreStyledCell).attrs((props: TableCellProps) => ({
  as: (props.isHeading) ? 'th' : 'td'
}))`
  ${fontTypeProp(TextType.PARAGRAPH)};

  display: table-cell;
  border-bottom: 0.1rem solid ${colorProp(Color.GRAY_50)};
  border-right: 0.1rem solid ${colorProp(Color.GRAY_50)};
  color: ${colorProp(Color.WHITE)};
  min-height: 2.8rem;
  min-width: 10rem;
  padding: 1.6rem;
  text-align: center;
  vertical-align: inherit;

  &:last-child {
    border-right: 0;
  }

  ${TableRow}:last-child & {
    border-bottom: 0;
  }

  ${ifProp(componentProps.IS_HEADING, css`
    background-color: ${colorProp(Color.GRAY_900)};
    font-weight: ${fontWeightProp(FontWeight.BOLD)};

    &:first-child {
      border-top-left-radius: 0.4rem;
    }

    &:last-child {
      border-top-right-radius: 0.4rem;
    }
  `)}
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;
