/**
 * Logo Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {type FC, StrictMode, useCallback} from 'react';
import {styled} from 'styled-components';

type Properties = {
	readonly title?: string;
	readonly url?: string;
	readonly urlRelations?: string[];
	readonly solidColor?: string;
};

const Svg = styled.svg`
	inline-size: 340px;
	block-size: 190px;
	vertical-align: bottom;
`;

const defaultUrlRelations = ['start', 'me'];

const Logo: FC<Properties> = ({
	title = 'Marc Görtz',
	url = 'https://marcgoertz.de/',
	urlRelations = defaultUrlRelations,
	solidColor,
}) => {
	const renderPath = useCallback(() => {
		if (solidColor) {
			return (
				<path d="M236.305 68.36c0-19.988 16.07-36.19 35.894-36.19 19.825 0 35.895 16.202 35.895 36.19 0 19.987-16.07 36.19-35.895 36.19-19.824 0-35.894-16.203-35.894-36.19zm-31.906-1.005s.06 4.371.18 6.031c2.551 35.408 31.851 63.334 67.62 63.334a67.082 67.082 0 0 0 35.58-10.159c-2.383 17.66-17.411 31.27-35.58 31.27-4.194 0-12.002-2.017-12.169-2.131a35.582 35.582 0 0 1-6.805-3.328c-1.236-.345-2.574-.573-3.958-.573-2.955 0-5.636.686-7.608 1.639l-3.36 3.387-13.54 13.652C236.987 182.554 253.73 190 272.199 190 309.645 190 340 159.395 340 121.64V68.36C340 30.605 309.645 0 272.2 0c-20.725 0-39.277 9.374-51.713 24.147C208.14 9.38 189.657 0 169.002 0c-20.305 0-38.51 9.063-50.85 23.398C105.813 9.063 87.607 0 67.303 0 30.131 0 0 30.38 0 67.857v35.688c0 18.322 14.731 33.175 32.903 33.175V67.355c0-19.433 15.624-35.186 34.898-35.186 17.012 0 31.178 12.272 34.269 28.515-.246 2.357-.37 42.861-.37 42.861 0 18.322 14.732 33.175 32.904 33.175V67.355c0-19.433 15.624-35.186 34.897-35.186 19.274 0 34.898 15.753 34.898 35.186zm0 6.031h.18c-.12-1.66-.18 0-.18 0z" />
			);
		}

		return (
			<>
				<defs>
					<linearGradient
						id="logo-a"
						x1="100%"
						x2="3%"
						y1="57%"
						y2="65%"
					>
						<stop offset="0%" stopColor="#d12b97" />
						<stop offset="100%" stopColor="#c82a91" />
					</linearGradient>
					<linearGradient
						id="logo-b"
						x1="29%"
						x2="84%"
						y1="83%"
						y2="75%"
					>
						<stop offset="0%" stopColor="#b22581" />
						<stop offset="100%" stopColor="#da4da9" />
					</linearGradient>
					<linearGradient
						id="logo-c"
						x1="60%"
						x2="34%"
						y1="14%"
						y2="98%"
					>
						<stop offset="0%" stopColor="#601445" />
						<stop offset="100%" stopColor="#bc2788" />
					</linearGradient>
					<linearGradient
						id="logo-d"
						x1="14%"
						x2="42%"
						y1="54%"
						y2="-13%"
					>
						<stop offset="0%" stopColor="#8f1d67" />
						<stop offset="100%" stopColor="#c5298f" />
					</linearGradient>
					<linearGradient
						id="logo-e"
						x1="36%"
						x2="29%"
						y1="13%"
						y2="13%"
					>
						<stop offset="0%" stopColor="#99206e" />
						<stop offset="100%" stopColor="#b82685" />
					</linearGradient>
					<linearGradient
						id="logo-f"
						x1="96%"
						x2="38%"
						y1="5%"
						y2="72%"
					>
						<stop offset="0%" stopColor="#6d164e" />
						<stop offset="100%" stopColor="#a62277" />
					</linearGradient>
				</defs>
				<mask id="logo-mask" fill="#fff">
					{}
					<path d="M236.305 68.36c0-19.988 16.07-36.19 35.894-36.19 19.825 0 35.895 16.202 35.895 36.19 0 19.987-16.07 36.19-35.895 36.19-19.824 0-35.894-16.203-35.894-36.19zm-31.906-1.005s.06 4.371.18 6.031c2.551 35.408 31.851 63.334 67.62 63.334a67.082 67.082 0 0 0 35.58-10.159c-2.383 17.66-17.411 31.27-35.58 31.27-4.194 0-12.002-2.017-12.169-2.131a35.582 35.582 0 0 1-6.805-3.328c-1.236-.345-2.574-.573-3.958-.573-2.955 0-5.636.686-7.608 1.639l-3.36 3.387-13.54 13.652C236.987 182.554 253.73 190 272.199 190 309.645 190 340 159.395 340 121.64V68.36C340 30.605 309.645 0 272.2 0c-20.725 0-39.277 9.374-51.713 24.147C208.14 9.38 189.657 0 169.002 0c-20.305 0-38.51 9.063-50.85 23.398C105.813 9.063 87.607 0 67.303 0 30.131 0 0 30.38 0 67.857v35.688c0 18.322 14.731 33.175 32.903 33.175V67.355c0-19.433 15.624-35.186 34.898-35.186 17.012 0 31.178 12.272 34.269 28.515-.246 2.357-.37 42.861-.37 42.861 0 18.322 14.732 33.175 32.904 33.175V67.355c0-19.433 15.624-35.186 34.897-35.186 19.274 0 34.898 15.753 34.898 35.186zm0 6.031h.18c-.12-1.66-.18 0-.18 0z" />
				</mask>
				<g mask="url(#logo-mask)">
					<path
						fill="url(#logo-a)"
						d="M42 43L26.71 190h152.3l-4.343-112L42 43z"
					/>
					<path fill="url(#logo-b)" d="M340 94v96H226l114-96z" />
					<path
						fill="#941f6a"
						d="M174 77l4.21 113h48.4L340 94.575V54.85L174 77z"
					/>
					<path fill="#d4319c" d="M0 178l29 12H0v-12z" />
					<path fill="#de5db1" d="M0 164l28 26-28-11v-15z" />
					<path
						fill="url(#logo-c)"
						d="M0 164.19L28 190 43 43 0 59.355V164.19z"
					/>
					<path fill="#881c61" d="M0 22l43 22L0 60V22z" />
					<path fill="#aa237a" d="M0 23.5L43 44 9.035 0H0v23.5z" />
					<path fill="#bf288a" d="M8 0h70L43 44 8 0z" />
					<path fill="url(#logo-d)" d="M77 0h65l33 79L42 44 77 0z" />
					<path fill="url(#logo-e)" d="M141 0h105l-72 78-33-78z" />
					<path fill="url(#logo-f)" d="M245 0h95v56L173 78l72-78z" />
					<path fill="#e685c4" d="M230 0h16l-18 18 2-18z" />
					<path fill="#b52683" d="M246 0h24l-42 18 18-18z" />
				</g>
			</>
		);
	}, [solidColor]);

	return (
		<StrictMode>
			<a
				href={url}
				rel={urlRelations?.join(' ')}
				className="h-card"
				aria-label={title}
			>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 340 190"
					role="img"
					aria-labelledby="logo-title"
					fill={solidColor}
				>
					<title className="p-name" id="logo-title">
						{title}
					</title>
					{renderPath()}
				</Svg>
			</a>
		</StrictMode>
	);
};

export default Logo;
