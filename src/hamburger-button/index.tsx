/**
 * Hamburger Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {StrictMode, useState} from 'react';
import type {ComponentType} from 'react';
import {styled} from 'styled-components';

type Position = {
  blockStart?: string;
  blockEnd?: string;
  inlineStart?: string;
  inlineEnd?: string;
};

type LinesProps = {
  $isX: boolean;
};

type Props = {
  readonly label?: string;
  readonly labelActive?: string;
  readonly id?: string;
  readonly position: Position;
};

const Input = styled.input<{$position: Position}>`
  position: absolute;
  inset-block-start: ${(p) => p.$position.blockStart ?? ''};
  inset-block-end: ${(p) => p.$position.blockEnd ?? ''};
  inset-inline-start: ${(p) => p.$position.inlineStart ?? ''};
  inset-inline-end: ${(p) => p.$position.inlineEnd ?? ''};
  inline-size: 1px;
  block-size: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`;

const Hamburger = styled.label<{$position: Position}>`
  position: absolute;
  inset-block-start: ${(p) => p.$position.blockStart ?? ''};
  inset-block-end: ${(p) => p.$position.blockEnd ?? ''};
  inset-inline-start: ${(p) => p.$position.inlineStart ?? ''};
  inset-inline-end: ${(p) => p.$position.inlineEnd ?? ''};
  z-index: 1;
  inline-size: 2em;
  block-size: 1.5em;
  cursor: pointer;
`;

const LinesCommon = `
  display: block;
  position: absolute;
  border-radius: 4px;
  inline-size: 100%;
  block-size: 4px;
  background-color: currentColor;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
`;

const Lines = styled.span<LinesProps>`
  inset-block-start: 50%;
  margin-block-start: -2px;
  ${LinesCommon}
  ${(p) =>
    p.$isX
      ? `
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  `
      : `
    transition-duration: 0.2s;
    transition-timing-function: ease;
  `}

  &::before {
    content: '';
    ${LinesCommon}
    ${(p) =>
      p.$isX
        ? `
      inset-block-start: 0;
      opacity: 0;
      transition: inset-block-start 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    `
        : `
      inset-block-start: -10px;
      transition: inset-block-start 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    `}
  }

  &::after {
    content: '';
    ${LinesCommon}
    ${(p) =>
      p.$isX
        ? `
      inset-block-end: 0;
      transform: rotate(-90deg);
      transition: inset-block-end 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    `
        : `
      inset-block-end: -10px;
      transition: inset-block-end 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    `}
  }
` as ComponentType<LinesProps>;

const HamburgerButton = ({
  label,
  labelActive,
  id,
  position,
}: Props): JSX.Element => {
  const [checked, setChecked] = useState(false);

  return (
    <StrictMode>
      <Input
        type="checkbox"
        id={id}
        $position={position}
        checked={checked}
        onChange={(): void => {
          setChecked(!checked);
        }}
      />
      <Hamburger
        htmlFor={id}
        aria-label={checked ? labelActive : label}
        $position={position}
      >
        <Lines $isX={checked} />
      </Hamburger>
    </StrictMode>
  );
};

HamburgerButton.defaultProps = {
  label: 'Menü anzeigen',
  labelActive: 'Menü ausblenden',
  id: 'toggle',
};

export default HamburgerButton;
