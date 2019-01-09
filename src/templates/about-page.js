import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import About from '../components/About';
import { HTMLContent } from '../components/Content';

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<About
			contentComponent={HTMLContent}
			title={post.frontmatter.title}
			content={post.html}
		/>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
