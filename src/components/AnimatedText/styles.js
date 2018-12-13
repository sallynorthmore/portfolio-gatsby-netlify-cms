import styled from 'styled-components';

export const Inner = styled.div`
	margin: auto;
	max-width: 86vw;
	transition: 195ms color 500ms ease-out;

	${props =>
		props.isFinished
			? `
		color: rgb(225, 72, 61);
		`
			: `color: black;`};

	& > div {
		color: inherit;
		font-family: 'adobe-garamond-pro';
		font-size: 6.25vw;
		font-weight: 600;
		letter-spacing: -0.01em;
		line-height: 1.3em;
		min-height: 200px;
	}
`;
