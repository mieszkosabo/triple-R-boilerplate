import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Topbar = styled.div`
    height: 100px;
    background-color: ${theme('colors.primary')};
    box-shadow: 0px 1px 3px ${theme('colors.shadow')};

    display: flex;
    align-items: center;
`;
