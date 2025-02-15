/**
 * Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {
  memo,
  StrictMode,
  type ButtonHTMLAttributes,
  type FC,
} from 'react';
import {styled} from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0.25rem 1rem;
  border: 0;
  font-size: inherit;
  font-family:
    system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
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

const Button: FC<Properties> = ({type = 'button', ...rest}) => (
  <StrictMode>
    <StyledButton type={type} {...rest} />
  </StrictMode>
);

export default memo(Button);
