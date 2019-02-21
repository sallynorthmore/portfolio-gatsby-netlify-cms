import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const HTMLContent = ({ content, className }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

let Content = ({ content, className }) => {
	this.props.dispatch({ type: ' LOG_VISIT' });
	return <div className={className}>{content}</div>;
};

Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

Content = connect()(Content);

export default Content;
