import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Banner from '../Banner';
import { LayoutComponent } from './styles';

const TemplateWrapper = ({ children }) => (
	<LayoutComponent>
		<Helmet title="Sally Northmore" />
		<Banner />
		<div>{children}</div>
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
