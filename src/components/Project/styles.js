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
	margin-top: 20vh;
	height: 50vh;
	justify-content: center;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 1.25rem;
	font-weight: 900;
	letter-spacing: 0.1rem;
	line-height: 1.3;
	text-decoration: none;
	text-transform: uppercase;
`;

export const Subtitle = styled.h2`
	font-size: 1rem;
	font-weight: 900;
	letter-spacing: 0.1rem;
	line-height: 1.25rem;
	text-decoration: none;
	text-transform: uppercase;
`;

export const Client = styled.span`
	display: block;
	color: grey;
	font-size: 0.75rem;
	max-width: 80%;
	margin: 0 auto;

	@media (min-width: 720px) {
		display: inline;
		font-size: 1rem;
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
	color: #666;
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
	color: #666;
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
	color: color: #666;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.04em;
	line-height: 18px;
	text-decoration: none;
`;

export const Date = styled.div`
	color: color: #666;
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
