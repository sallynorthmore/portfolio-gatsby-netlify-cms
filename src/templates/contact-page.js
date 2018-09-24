import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import ContactForm from '../components/ContactForm';

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	return (
		<section>
			<div>
				<h2>{title}</h2>
				<PageContent content={content} />
				<ContactForm />
			</div>
		</section>
	);
};

ContactPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<ContactPageTemplate
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
