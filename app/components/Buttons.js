import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { theme } from 'styled-tools';
import { primaryFont, typeScale } from '../theme/typography';

export const BUTTON_MODIFIERS = {
    small: () => `
      padding: 8px;
      font-size: ${typeScale.helperText};
    `,
    big: ({ theme }) => `
      height: 50px;
      font-size: ${theme.typeScale.header1};
      padding-top: 3px;
    `,
    ultra: ({ theme }) => `
      font-weight: ${theme.fontWeights.ultra};
    `,
    italic: () => `
      font-style: italic;
    `
};
const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    border: 0;
    border-radius: 11px;
    box-shadow: 2px 3px 2px ${theme('colors.shadow')};
    cursor: pointer;
    width: fit-content;
    padding-left: 15px;
    padding-right: 15px;
    font-family: ${primaryFont};
    font-size: ${typeScale.header2};
    font-weight: ${theme('typography.fontWeights.regular')};

  &:hover {
    background-color: ${theme('colors.primaryDarken')};
  }
  &:focus {

  }
  &:active {

  }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${theme('colors.primary')};
    color: ${theme('colors.text')};

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
