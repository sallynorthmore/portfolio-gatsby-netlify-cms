import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import Project from '../components/Project';

const ProjectPage = ({ data, pageContext }) => {
	const { markdownRemark: post } = data;
	const { prev, next } = pageContext;

	return (
		<Layout>
			<Project
				client={post.frontmatter.client}
				content={post.html}
				contentComponent={HTMLContent}
				date={post.frontmatter.date}
				description={post.frontmatter.description}
				next={next}
				previous={prev}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

ProjectPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
	pageContext: PropTypes.object,
};

export default ProjectPage;

export const pageQuery = graphql`
	query ProjectByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "YYYY")
				title
				description
				tags
				client
			}
		}
	}
`;
