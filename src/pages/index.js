import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

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
				<section id="projects" className="HomePage-projects">
					<h2 className="Title">
						<a className="Title-link" href="#projects">
							Some things I&rsquo;ve built
						</a>
					</h2>

					<div className="Grid">
						{posts.map(({ node: post }) => (
							<div className="Grid-item" key={post.id}>
								<Link className="Grid-inner" to={post.fields.slug}>
									<h3 className="Grid-title">{post.frontmatter.title}</h3>
									<div className="Grid-subtitle">{post.frontmatter.date}</div>
									<div className="Grid-excerpt">{post.excerpt}</div>
								</Link>
							</div>
						))}
					</div>
				</section>
				<Footer anchor="#projects" />
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
