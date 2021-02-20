import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { theme } from 'styled-tools';
import { primaryFont, typeScale } from '../theme/typography';

export const BUTTON_MODIFIERS = {
    small: () => `
      padding: 8px;
      font-size: ${typeScale.helperText};
  `
};
const Button = styled.button`
    padding: 8px 12px;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};

  &:hover {

  }
  &:focus {

  }
  &:active {

  }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${theme('colors.primary')};
    color: white;
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
