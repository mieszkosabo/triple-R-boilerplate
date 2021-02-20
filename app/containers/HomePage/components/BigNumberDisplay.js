import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import PropTypes from 'prop-types';
import { Flexbox } from '../../../components/layout/Flexbox';

const BigNumber = styled.p`
    font-size: 7rem;
    color: ${theme('colors.text')};
    font-weight: ${theme('fontWeights.bold')};
`;
export const BigNumberDisplay = ({ number }) => (
    <Flexbox height="30vw" justify="center" align="center">
        <BigNumber>
            {number}
        </BigNumber>
    </Flexbox>
);

BigNumberDisplay.propTypes = {
    number: PropTypes.number
};

BigNumberDisplay.defaultProps = {
    number: 0
};
