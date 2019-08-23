import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LayoutComponent } from './styles';

const TemplateWrapper = ({ children }) => (
	<LayoutComponent>
		<Helmet title="Sally Northmore">
			<script src="https://assets.digitalclimatestrike.net/widget.js" async></script>
		</Helmet>

		{children}
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
