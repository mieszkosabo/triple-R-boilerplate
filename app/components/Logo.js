import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
const LogoWrapper = styled.a`
    font-size: 3rem;
    color: ${theme('colors.text')};
    font-weight: ${theme('fontWeights.ultra')};
    padding-left: ${theme('dims.smallSpace')};
`;

export const Logo = () => (
    <LogoWrapper>
    Triple R BoilerPlate
    </LogoWrapper>
);
