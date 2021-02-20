import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Flexbox = styled.div`
    display: flex;
    justify-content: ${prop('justify', 'unset')};
    align-items: ${prop('align', 'unset')};
    flex-direction: ${prop('direction', 'row')};
    width: ${prop('width', 'auto')};
    height: ${prop('height', 'auto')};
`;
