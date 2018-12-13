import styled, { keyframes } from 'styled-components';

export const HomeComponent = styled.div`
	text-align: center;
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const Headline = styled.h1`
	scroll-snap-align: start;
	animation-delay: 500ms;
	animation-duration: 1000ms;
	animation-name: ${fadeIn};
	animation-fill-mode: forwards;
	opacity: 0;
	display: flex;
	height: 100vh;
	justify-content: center;

	& > div:first-child {
		margin: auto;
		top: -3rem;
		position: relative;
	}
`;

export const Nav = styled.div`
	animation-delay: 2000ms;
	animation-duration: 1000ms;
	animation-name: ${fadeIn};
	animation-fill-mode: forwards;
	cursor: pointer;
	opacity: 0;
	left: 0;
	width: 100%;
	position: absolute;
	transform-origin: center;
	transition: 500ms transform ease-out;
	bottom: 0;
	height: 10vh;

	/* Animate */
	${props =>
		props.isScrolled
			? `
		transform: scale(0);
		`
			: null};
`;

const arrowBounce = keyframes`
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-12px);
	}
	100% {
		transform: translateY(0);
	}
`;

export const DownArrow = styled.div`
	display: flex;
	text-align: center;

	& > div {
		animation-direction: alternate;
		animation-duration: 1000ms;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		margin: auto;
		position: relative;

		/* Animate */
		${props =>
			props.isAnimated
				? `
			animation-name: ${arrowBounce};
			`
				: null};
	}
`;

export const Projects = styled.section`
	scroll-snap-align: start;
	min-height: 100vh;
	padding-top: 5rem;
`;

export const Title = styled.h2`
	color: rgb(34, 34, 34);
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-decoration: none;
	text-transform: uppercase;

	& a {
		text-decoration: none;
	}
`;
