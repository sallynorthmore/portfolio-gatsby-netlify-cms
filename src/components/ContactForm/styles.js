import styled from 'styled-components';

export const ContactFormComponent = styled.div`
	display: block;
	text-align: center;

	& form {
		display: block;
		margin: 0 auto;
		max-width: 420px;
		width: 100%;
		text-align: left;
	}

	& label,
	& input {
		display: block;
		margin: 40px 0 0 0;
		width: 100%;
	}

	& input {
		border-bottom: 1px solid #ccc;
		font-size: 14px;
		margin: 10px 0 0 0;
		padding: 8px 0;
	}

	& textarea {
		border: 1px solid #ccc;
		font-size: 14px;
		margin: 10px 0 0 0;
		width: 100%;
	}

	& button {
		display: block;
		background: black;
		color: white;
		padding: 20px;
		margin: 40px 0 0;
		width: 100%;
	}
`;

export const Title = styled.h2`
	color: rgb(20, 20, 20);
	font-family: 'adobe-garamond-pro';
	font-size: 25px;
	font-weight: 600;
	letter-spacing: -0.01em;
	line-height: 1.3;
	margin: 6vw auto 0;
	max-width: 400px;
`;
