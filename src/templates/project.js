import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ProjectTemplate = ({
	client,
	content,
	contentComponent,
	date,
	description,
	helmet,
	next,
	prev,
	tags,
	title,
}) => {
	const PostContent = contentComponent || Content;
	console.log(date);
	return (
		<section className="Project">
			{helmet || ''}

			<header className="Project-header">
				<h1 className="Project-title">
					{title} | {client}
				</h1>
				<p className="Project-description">{description}</p>
			</header>

			<div className="Project-body">
				<PostContent content={content} />
				{tags && tags.length ? (
					<ul className="Tags">
						{tags.map(tag => (
							<li key={tag + `tag`} className="Tags-item">
								<Link to={`/tags/${kebabCase(tag)}/`} className="Tags-link">
									{tag}
								</Link>
							</li>
						))}
					</ul>
				) : null}

				<p className="Project-date">{date}</p>
			</div>

			<div className="Project-navigation">
				<div className="Nav">
					{prev && (
						<Link to={prev.fields.slug} className="Nav-link">
							<abbrev title="Previous project">⇦</abbrev>
						</Link>
					)}
					{next && (
						<Link to={next.fields.slug} className="Nav-link">
							<abbrev title="Next project">⇨</abbrev>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

ProjectTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.instanceOf(Helmet),
	prev: PropTypes.node,
	next: PropTypes.node,
};

const ProjectPost = ({ data, pageContext }) => {
	const { markdownRemark: post } = data;
	const { prev, next } = pageContext;

	return (
		<Layout>
			<ProjectTemplate
				client={post.frontmatter.client}
				content={post.html}
				contentComponent={HTMLContent}
				date={post.frontmatter.date}
				description={post.frontmatter.description}
				helmet={<Helmet title={`Project: ${post.frontmatter.title}`} />}
				next={next}
				prev={prev}
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
	pageContext: PropTypes.object,
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
				client
			}
		}
	}
`;
