import styled, { css, keyframes } from 'styled-components';
// import { Link } from 'gatsby';

export const HomeComponent = styled.div`
	text-align: center;
`;

export const Headline = styled.h1`
	height: 100vh;
	display: flex;
	justify-content: center;
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
	width: 100%;
	position: fixed;
	bottom: 0;
	height: 200px;
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

	& svg {
	}
`;

export const Projects = styled.section`
	min-height: 100vh;
	padding-top: 90px;
`;
