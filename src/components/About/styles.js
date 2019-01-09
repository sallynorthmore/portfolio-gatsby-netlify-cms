import styled from 'styled-components';

export const Inner = styled.article`
	padding: 5rem 1rem;
	max-width: 720px;

	h1 {
		font-family: 'adobe-garamond-pro';
		font-size: 6.25vw;
		font-weight: 600;
		letter-spacing: -0.01em;
		line-height: 1.3em;
	}

	h2 {
		color: rgb(225, 72, 61);
		font-weight: 600;
		letter-spacing: -0.01em;
		line-height: 1.3em;
		margin-top: 2rem;
		font-size: 1.25rem;
		font-weight: 900;
		letter-spacing: 0.1rem;
		line-height: 1.3;
		text-decoration: none;
		text-transform: uppercase;
	}

	a {
		color: rgb(225, 72, 61);
		font-family: 'adobe-garamond-pro';
	}

	p {
		margin-top: 1rem;
		font-family: 'adobe-garamond-pro';
	}

	@media (min-width: 720px) {
		margin: 0 auto;

		h1,
		h2 {
			text-align: center;
		}

		h2 {
			margin-top: 3rem;
		}

		p {
			font-size: 1.25rem;
			margin-top: 1.5rem;
		}
	}
`;
