import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ProjectTemplate = ({
	content,
	contentComponent,
	description,
	tags,
	title,
	helmet,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="ProjectTemplate">
			{helmet || ''}

			<h1>{title}</h1>
			<p>{description}</p>

			<PostContent content={content} />

			{tags && tags.length ? (
				<div style={{ marginTop: `4rem` }}>
					<h4>Tags</h4>
					<ul className="taglist">
						{tags.map(tag => (
							<li key={tag + `tag`}>
								<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</section>
	);
};

ProjectTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.instanceOf(Helmet),
};

const ProjectPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<ProjectTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={<Helmet title={`Project: ${post.frontmatter.title}`} />}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

ProjectPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default ProjectPost;

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
			}
		}
	}
`;
