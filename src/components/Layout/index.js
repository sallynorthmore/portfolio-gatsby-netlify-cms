import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LayoutComponent } from './styles';

const TemplateWrapper = ({ children }) => (
	<LayoutComponent>
		<Helmet title="Sally Northmore" />

		{children}
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
