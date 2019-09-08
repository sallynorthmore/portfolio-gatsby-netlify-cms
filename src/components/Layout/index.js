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
		<a title="CO2 Parts Per Million (PPM) in the atmosphere" href="https://co2ppmbadge.piazza.energy/" target="_blank" className='ppmBadge'>
			<img src="https://co2ppmbadge.piazza.energy/latest/ppm00.svg" /><br/>
			<img src="https://co2ppmbadge.piazza.energy/latest/ppm10.svg" />
		</a>
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
