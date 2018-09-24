import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

import Contact from '../components/Contact';

const ContactPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<Contact
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

ContactPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
	query ContactPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
