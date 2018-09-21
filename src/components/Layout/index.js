import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Banner from '../Banner';
import { LayoutComponent } from './styles';

// import Social from '../components/Social';
// import '../all.sass';

const TemplateWrapper = ({ children, layoutClass }) => (
	<LayoutComponent className="Chrome">
		<Helmet title="Sally Northmore" />
		<Banner />
		{/*  <Social /> */}
		<div className={layoutClass}>{children}</div>
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
