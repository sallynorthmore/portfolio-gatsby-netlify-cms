import styled from 'styled-components';
import { Link } from 'gatsby';

export const GridComponent = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5vh;
`;

export const Item = styled.div`
	display: block;
	flex: 0 0 100%;
	position: relative;
	margin-top: 2rem;
	height: 60vh;

	@media (min-width: 520px) {
		background: black;
		border: 2px solid white;
		flex: 0 0 50%;
		height: auto;
		margin-top: 0;

		&:before {
			display: block;
			content: '';
			width: 100%;
			padding-top: 100%;
		}
	}

	@media (min-width: 720px) {
		border: 5px solid white;
		flex: 0 0 25%;
	}
`;

export const GridLink = styled(Link)`
	position: static;
	opacity: 1;
	padding: 1.25rem;
	text-decoration: none;
	width: 100%;

	@media (min-width: 520px) {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		transition: 195ms opacity ease-out;

		&:hover {
			background: black;
			cursor: pointer;
			opacity: 1;

			& h3::before {
				opacity: 1;
			}
		}
	}
`;

export const Thumbnail = styled.div`
	position: static;
	height: 50vh;

	${props =>
		props.image
			? `
		background-image: url(${props.image});
		background-size: cover;
		background-position: center;

		`
			: null};

	@media (min-width: 520px) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
`;

export const Title = styled.h3`
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	position: relative;
	text-transform: uppercase;

	&::before {
		color: black;
		content: '☞';
		display: inline-block;
		font-size: 15px;
		margin-left: -20px;
		opacity: 0;
		position: absolute;
	}

	@media (min-width: 520px) {
		color: white;
	}
`;

export const Subtitle = styled.div`
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.04em;
	line-height: 18px;

	@media (min-width: 520px) {
		color: rgb(187, 187, 187);
	}
`;
