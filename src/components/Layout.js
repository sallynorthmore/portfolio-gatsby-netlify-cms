import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';
import './all.sass';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet title="Sally Northmore" />
		<Banner />
		<div>{children}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
