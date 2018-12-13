import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const BannerComponent = styled.header`
	animation-delay: 250ms;
	animation-duration: 1000ms;
	animation-name: ${fadeIn};
	animation-fill-mode: forwards;
	opacity: 0;
	background: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	justify-content: space-between;
	left: 0;
	height: 5rem;
	max-height: 4rem;
	padding: 1rem 4vw 0;
	position: fixed;
	transition: 240ms all ease-in;
	top: 0;
	width: 100%;
	z-index: 1;
	transform: translateY(-1.25rem);

	/* Animate */
	${props =>
		props.isExpanded
			? `
		transform: translateY(0);
		max-height: none;

		`
			: null};
`;

export const Title = styled.div`
	color: rgb(34, 34, 34);
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-transform: uppercase;

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Contact = styled(Link)`
	color: rgb(34, 34, 34);
	display: inline-block;
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
