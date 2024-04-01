/**
 * Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {StrictMode, type ButtonHTMLAttributes} from 'react';
import {styled} from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0.25rem 1rem;
  border: 0;
  font-size: inherit;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: inherit;
  color: white;
  background-color: lightgrey;
  box-sizing: border-box;
  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: dodgerblue;
  }
`;

type Properties = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (properties: Properties) => (
  <StrictMode>
    <StyledButton {...properties} />
  </StrictMode>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
