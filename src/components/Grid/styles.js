import styled from 'styled-components';
import { Link } from 'gatsby';

export const GridComponent = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5vh;
`;

export const Item = styled.div`
	background: rgb(245, 245, 245);
	display: block;
	flex: 0 0 100%;
	position: relative;
	margin-top: 2rem;

	&:before {
		display: block;
		content: '';
		width: 100%;
		padding-top: 100%;
	}

	@media (min-width: 520px) {
		border: 2px solid white;
		flex: 0 0 50%;
		margin-top: 0;
	}

	@media (min-width: 720px) {
		border: 5px solid white;
		flex: 0 0 25%;
	}
`;

export const GridLink = styled(Link)`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	left: 0;
	opacity: 0;
	padding: 1.25rem;
	position: absolute;
	text-decoration: none;
	top: 0;
	transition: 195ms opacity ease-out;
	width: 100%;

	&:hover {
		background: black;
		cursor: pointer;
		opacity: 1;

		& h3::before {
			opacity: 1;
		}
	}
`;

export const Title = styled.h3`
	color: white;
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
`;

export const Subtitle = styled.div`
	color: rgb(187, 187, 187);
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.04em;
	line-height: 18px;
`;

export const Thumbnail = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;

	${props =>
		props.image
			? `
		background-image: url(${props.image});
		background-size: cover;
		background-position: center;

		`
			: null};
`;
