import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LayoutComponent } from './styles';

const TemplateWrapper = ({ children }) => (
	<LayoutComponent>

		<Helmet>
			<title>Sally Northmore</title>
			<meta name="description" content="I‘m a web developer. I care about 👩women in tech 💻, 🌱gardening, and 🌎climate" />
			<script src="https://assets.digitalclimatestrike.net/widget.js" type="text/javascript" async />
		</Helmet>

		{children}
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
