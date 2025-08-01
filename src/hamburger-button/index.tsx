/**
 * Hamburger Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {
	StrictMode,
	useCallback,
	useState,
	type ComponentType,
	type FC,
} from 'react';
import {css, styled} from 'styled-components';

type Position = {
	blockStart?: string;
	blockEnd?: string;
	inlineStart?: string;
	inlineEnd?: string;
};

type LinesProperties = {
	$isX: boolean;
};

type Properties = {
	readonly label?: string;
	readonly labelActive?: string;
	readonly id?: string;
	readonly position: Position;
};

const Input = styled.input<{$position: Position}>`
	position: absolute;
	inset: ${(p) =>
		[
			p.$position.blockStart ?? 'auto',
			p.$position.inlineEnd ?? 'auto',
			p.$position.blockEnd ?? 'auto',
			p.$position.inlineStart ?? 'auto',
		].join(' ')};
	inline-size: 1px;
	block-size: 1px;
	clip-path: inset(0);
	overflow: hidden;
`;

const Hamburger = styled.label<{$position: Position}>`
	position: absolute;
	inset: ${(p) =>
		[
			p.$position.blockStart ?? 'auto',
			p.$position.inlineEnd ?? 'auto',
			p.$position.blockEnd ?? 'auto',
			p.$position.inlineStart ?? 'auto',
		].join(' ')};
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

const Lines = styled.span<LinesProperties>`
	inset-block-start: 50%;
	margin-block-start: -2px;
	${LinesCommon}
	${(p) =>
		p.$isX
			? css`
					transform: rotate(225deg);
					transition-delay: 0.12s;
					transition-timing-function: cubic-bezier(
						0.215,
						0.61,
						0.355,
						1
					);
				`
			: css`
					transition-duration: 0.2s;
					transition-timing-function: ease;
				`}

	&::before {
		content: '';
		${LinesCommon}
		${(p) =>
			p.$isX
				? css`
						inset-block-start: 0;
						opacity: 0;
						transition:
							inset-block-start 0.1s ease-out,
							opacity 0.1s 0.12s ease-out;
					`
				: css`
						inset-block-start: -10px;
						transition:
							inset-block-start 0.1s 0.25s ease-in,
							opacity 0.1s ease-in;
					`}
	}

	&::after {
		content: '';
		${LinesCommon}
		${(p) =>
			p.$isX
				? css`
						inset-block-end: 0;
						transform: rotate(-90deg);
						transition:
							inset-block-end 0.1s ease-out,
							transform 0.22s 0.12s
								cubic-bezier(0.215, 0.61, 0.355, 1);
					`
				: css`
						inset-block-end: -10px;
						transition:
							inset-block-end 0.1s 0.25s ease-in,
							transform 0.22s
								cubic-bezier(0.55, 0.055, 0.675, 0.19);
					`}
	}
` as ComponentType<LinesProperties>;

const HamburgerButton: FC<Properties> = ({
	label = 'Menü anzeigen',
	labelActive = 'Menü ausblenden',
	id = 'toggle',
	position,
}) => {
	const [checked, setChecked] = useState(false);

	const handleChange = useCallback(() => {
		setChecked((previous) => !previous);
	}, []);

	return (
		<StrictMode>
			<Input
				type="checkbox"
				id={id}
				$position={position}
				checked={checked}
				onChange={handleChange}
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

export default HamburgerButton;
