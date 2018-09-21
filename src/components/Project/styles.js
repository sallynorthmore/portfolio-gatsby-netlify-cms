import styled from 'styled-components';
// import { Link } from 'gatsby';

export const ProjectComponent = styled.div`
	position: relative;
	text-align: center;
`;

export const Header = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 90vh;
	justify-content: center;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 14px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-decoration: none;
	text-transform: uppercase;
`;

export const Client = styled.span`
	display: block;
	color: grey;
	font-size: 13px;

	@media (min-width: 720px) {
		display: inline;
		font-size: 14px;
		color: rgb(20, 20, 20);

		&::before {
			content: ' | ';
			display: inline;
		}
	}
`;

export const Description = styled.p`
	color: rgb(20, 20, 20);
	font-family: 'adobe-garamond-pro';
	font-size: 25px;
	font-weight: 600;
	letter-spacing: -0.01em;
	line-height: 1.3;
	margin-top: 6vw;
	width: 75%;
`;

export const Body = styled.div`
	color: rgb(187, 187, 187);
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.04em;
	line-height: 18px;
	max-width: 80%;
	margin-right: auto;
	margin-left: auto;

	& p {
		color: inherit;
		margin-top: 6vw;
	}

	& img {
		max-width: 100%;
	}
`;

export const Tags = styled.ul`
	margin: 6vw auto;
	max-width: 80%;
`;

export const TagItem = styled.li`
	color: rgb(187, 187, 187);
	display: inline-block;

	&:not(:last-child) {
		margin-right: 4px;

		&::after {
			color: inherit;
			content: ', ';
			display: inline;
		}
	}
`;

export const TagLink = styled.span`
	color: rgb(187, 187, 187);
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.04em;
	line-height: 18px;
	text-decoration: none;
`;

export const Date = styled.div`
	color: rgb(187, 187, 187);
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.04em;
	line-height: 18px;
	margin-top: 6vw;
`;

export const Nav = styled.div`
	left: 0
	top: 0;
	width: 100%
`;
