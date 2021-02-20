import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Spacer = styled.div`
    display: flex;
    flex-grow: ${ifProp('grow', 1, 'unset')};
    width: ${prop('width', 'auto')};
    height: ${prop('height', 'auto')};
`;
