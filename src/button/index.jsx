// @flow
/* eslint react/button-has-type: "off" */

/**
 * Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import * as React from 'react';
import styled from 'styled-components';

type ButtonType = 'submit' | 'reset' | 'button';

type Props = {
  children: React.Node,
  type?: ButtonType,
};

const StyledButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0.25rem 1rem;
  border: 0;
  font-size: inherit;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
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

const Button = ({ children, type, ...rest }: Props): React.Node => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledButton type={type} {...rest}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
