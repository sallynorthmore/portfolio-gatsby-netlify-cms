import styled from 'styled-components';

export const ContactComponent = styled.div`
	display: block;
	text-align: center;
`;

export const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;

	& > div {
		position: relative;
	}
`;

export const Form = styled.div`
	max-width: 640px;
	margin: 5rem auto 0;
	padding: 0 1rem;
`;
