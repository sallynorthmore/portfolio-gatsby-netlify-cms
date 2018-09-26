import styled from 'styled-components';

export const ReduxComponent = styled.div`
	display: block;
	text-align: center;

	& h1 {
		display: block;
		font-size: 13px;
		font-weight: 900;
		letter-spacing: 0.1em;
		line-height: 1.3;
		margin: 6vw auto 0;
		text-decoration: none;
		text-transform: uppercase;
	}

	& p {
		color: rgb(20, 20, 20);
		font-family: 'adobe-garamond-pro';
		font-size: 25px;
		font-weight: 600;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 30px auto 0;
		max-width: 400px;
	}
`;
