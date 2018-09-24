import styled from 'styled-components';

export const ContactFormComponent = styled.div`
	display: block;
	text-align: center;
`;

export const Form = styled.form`
	display: block;
	margin: 0 auto;
	max-width: 420px;
	width: 100%;
	text-align: left;

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
