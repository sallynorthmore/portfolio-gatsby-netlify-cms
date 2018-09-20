import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<Layout layoutClass="HomePage">
				<h1 className="HomePage-headline">
					<span>
						I&rsquo;m a freelance frontend developer living and working in
						London
					</span>
				</h1>
				<section className="HomePage-projects">
					<h2 className="Title">Some things I've built</h2>

					<div className="Projects">
						{posts.map(({ node: post }) => (
							<div
								className="Project"
								style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
								key={post.id}
							>
								<p>
									<Link className="Title" to={post.fields.slug}>
										{post.frontmatter.title}
									</Link>
									<span> &bull; </span>
									<small>{post.frontmatter.date}</small>
								</p>
								<p>
									{post.excerpt}
									<br />
									<br />
									<Link className="button is-small" to={post.fields.slug}>
										Keep Reading →
									</Link>
								</p>
							</div>
						))}
					</div>
				</section>
			</Layout>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "project" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "YYYY")
					}
				}
			}
		}
	}
`;
