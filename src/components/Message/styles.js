import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% { opacity: 1 }
	100% { opacity: 0; display: none; z-index: -1;}
`;

export const MessageComponent = styled.div`
	animation: ${fadeOut} 0.3s 2s forwards;
	background: black;
	left: 0;
	padding: 4vw 4vw 2vw;
	position: fixed;
	text-align: center;
	top: 0;
	width: 100%;
	z-index: 4;

	& p {
		color: white;
		font-size: 13px;
		font-weight: 900;
		letter-spacing: 0.1em;
		line-height: 1.3;
		text-decoration: none;
		// text-transform: uppercase;
	}
`;
