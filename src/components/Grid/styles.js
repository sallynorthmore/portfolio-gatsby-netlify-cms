import styled from 'styled-components';
import { Link } from 'gatsby';

export const GridComponent = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5vh;
`;

export const Item = styled.div`
	align-items: center;
	background: rgb(245, 245, 245);
	border: 2px solid white;
	display: flex;
	height: 40vw;
	justify-content: center;
	width: 50%;

	&:nth-child(4n + 1),
	&:nth-child(4n) {
		background: #f2ede7;
	}

	@media (min-width: 720px) {
		border: 5px solid white;
		height: 250px;
		width: 25%;

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
	display: block;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	padding: 2em;
	text-decoration: none;
	width: 100%;

	&:hover {
		cursor: pointer;

		& .Grid-title::before {
			opacity: 1;
		}
	}
`;

export const Title = styled.h3`
	color: rgb(76, 76, 76);
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
