import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Banner from '../Banner';
import Content from '../Content';
import { Inner } from './styles.js';

function About({ content, contentComponent }) {
	const PageContent = contentComponent || Content;

	return (
		<div>
			<Helmet title={'About Sally Northmore'} />
			<Banner />
			<Inner>
				<PageContent content={content} />
			</Inner>
		</div>
	);
}

About.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

About.defaultProps = {};

export default About;
