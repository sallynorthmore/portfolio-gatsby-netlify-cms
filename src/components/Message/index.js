import React from 'react';
import PropTypes from 'prop-types';
import { MessageComponent } from './styles';

const Message = ({ message }) => (
	<MessageComponent aria-live="polite" role="region">
		<p>{message}</p>
	</MessageComponent>
);

Message.defaultProps = {
	message: 'Thanks for your message.',
};

Message.propTypes = {
	message: PropTypes.string,
};

export default Message;
