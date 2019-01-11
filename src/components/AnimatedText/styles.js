import styled from 'styled-components';

export const Inner = styled.div`
	margin: auto;
	max-width: 86vw;
	transition: 195ms color 500ms ease-out;
	color: rgb(225, 72, 61);

	& > div {
		color: inherit;
		font-family: 'adobe-garamond-pro';
		font-size: 6.25vw;
		font-weight: 600;
		letter-spacing: -0.01em;
		line-height: 1.3em;
		min-height: 110px;
	}

	@media (min-width: 720px) {
		& > div {
			min-height: 200px;
		}
	}

	@media (min-width: 1200px) {
		& > div {
			min-height: 240px;
		}
	}
`;
