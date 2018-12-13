import styled from 'styled-components';
import { Link } from 'gatsby';

export const GridComponent = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5vh;
`;

export const Item = styled.div`
	background: rgb(245, 245, 245);
	border: 2px solid white;
	display: block;
	flex: 0 0 50%;
	position: relative;

	&:before {
		display: block;
		content: '';
		width: 100%;
		padding-top: 100%;
	}

	&:nth-child(4n + 1),
	&:nth-child(4n) {
		background: #f2ede7;
	}

	@media (min-width: 720px) {
		border: 5px solid white;
		flex: 0 0 25%;

		&:nth-child(4n + 1),
		&:nth-child(4n) {
			background: rgb(245, 245, 245);
		}

		&:nth-child(8n + 2),
		&:nth-child(8n + 4),
		&:nth-child(8n + 5),
		&:nth-child(8n + 7) {
			background: #f2ede7;
		}
	}
`;

export const GridLink = styled(Link)`
	background: #111;
	opacity: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	padding: 1.5rem;
	position: absolute;
	text-decoration: none;
	transition: 195ms opacity ease-out;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 2;

	&:hover {
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
