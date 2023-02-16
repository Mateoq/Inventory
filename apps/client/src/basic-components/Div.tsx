/**
 * Module with simple wrapper of the div html element.
 * @module src/shared/legacy/components/Div/Div
 */
// Node.
import styled from 'styled-components';
import { prop } from 'styled-tools';

// Noir.
import { componentProps } from '@/constants';

export interface DivProps {
  css?: string;
}

const Div = styled.div<DivProps>`
  ${prop(componentProps.CSS)};
`;

export default Div;
