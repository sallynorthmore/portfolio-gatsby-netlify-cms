import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProjectLinksComponent = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const Button = styled(Link)`
	display: block;
	height: 100%;
	left: 0;
	opacity: 0.6;
	position: fixed;
	text-decoration: none;
	top: 50vh;
	width: 40px;

	&:nth-child(2) {
		left: auto;
		right: 0;
	}

	& abbr {
		text-decoration: none;
	}
`;
