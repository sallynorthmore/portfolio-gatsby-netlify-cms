import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a
			href="#"
			onClick={e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

Link.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default Link;
