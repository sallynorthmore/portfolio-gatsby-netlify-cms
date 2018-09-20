import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Footer from '../components/Footer';

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

	return (
		<section className="Project">
			{helmet || ''}

			<header className="Project-header">
				<h1 className="Project-title">
					{title}
					<span className="Project-client">{client}</span>
				</h1>
				<p className="Project-description">{description}</p>
			</header>

			<div id="content" className="Project-body">
				<PostContent content={content} />
				{tags && tags.length ? (
					<ul className="Tags">
						{tags.map(tag => (
							<li key={tag + `tag`} className="Tags-item">
								<span className="Tags-link">{tag}</span>
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
							<abbr title="Previous project">⇦</abbr>
						</Link>
					)}
					{next && (
						<Link to={next.fields.slug} className="Nav-link">
							<abbr title="Next project">⇨</abbr>
						</Link>
					)}
				</div>
			</div>

			<Footer anchor="#content" />
		</section>
	);
};

ProjectTemplate.propTypes = {
	client: PropTypes.string,
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	date: PropTypes.string,
	description: PropTypes.string,
	helmet: PropTypes.instanceOf(Helmet),
	next: PropTypes.node,
	prev: PropTypes.node,
	title: PropTypes.string,
	tags: PropTypes.node,
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
