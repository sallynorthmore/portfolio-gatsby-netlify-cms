import styled from 'styled-components';
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

export const Projects = styled.section`
	min-height: 100vh;
	padding-top: 90px;
`;
