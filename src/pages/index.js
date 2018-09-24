import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import PageTransition from 'gatsby-plugin-page-transitions';
import BaseStyles from '../components/BaseStyles';
import Layout from '../components/Layout';
import Home from '../components/Home';

BaseStyles();

export default class IndexPage extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<Layout>
				<Home projects={posts} />
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
