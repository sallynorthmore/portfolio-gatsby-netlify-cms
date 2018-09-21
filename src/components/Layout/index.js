import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Banner from '../Banner';

// import Social from '../components/Social';
import '../all.sass';

const TemplateWrapper = ({ children, layoutClass }) => (
	<div className="Chrome">
		<Helmet title="Sally Northmore" />
		<Banner />
		{/*  <Social /> */}
		<div className={layoutClass}>{children}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
