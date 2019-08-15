// @flow

/**
 * Hamburger Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  label?: string,
  labelActive?: string,
  id?: string,
  position: {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
  },
};

const Input = styled.input`
  position: absolute;
  top: ${p => p.position.top || null};
  bottom: ${p => p.position.bottom || null};
  left: ${p => p.position.left || null};
  right: ${p => p.position.right || null};
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`;

const Hamburger = styled.label`
  position: absolute;
  top: ${p => p.position.top || null};
  bottom: ${p => p.position.bottom || null};
  left: ${p => p.position.left || null};
  right: ${p => p.position.right || null};
  z-index: 1;
  width: 2em;
  height: 1.5em;
  cursor: pointer;
`;

const LinesCommon = `
  display: block;
  position: absolute;
  border-radius: 4px;
  width: 100%;
  height: 4px;
  background-color: currentColor;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
`;

const Lines = styled.span`
  top: 50%;
  margin-top: -2px;
  ${LinesCommon}
  ${p =>
    p.isX
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
    ${p =>
      p.isX
        ? `
      top: 0;
      opacity: 0;
      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    `
        : `
      top: -10px;
      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    `}
  }

  &::after {
    content: '';
    ${LinesCommon}
    ${p =>
      p.isX
        ? `
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    `
        : `
      bottom: -10px;
      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    `}
  }
`;

const HamburgerButton = ({
  label = 'Menü anzeigen',
  labelActive = 'Menü ausblenden',
  id = 'toggle',
  position,
}: Props) => {
  const [checked, toggle] = useState(false);
  return (
    <>
      <Input
        type="checkbox"
        id={id}
        position={position}
        checked={checked}
        onChange={() => toggle(!checked)}
      />
      <Hamburger
        htmlFor={id}
        aria-label={checked ? labelActive : label}
        position={position}
      >
        <Lines isX={checked} />
      </Hamburger>
    </>
  );
};

export default HamburgerButton;
