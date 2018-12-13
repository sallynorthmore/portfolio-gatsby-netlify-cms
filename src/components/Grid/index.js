import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {
	GridComponent,
	Item,
	GridLink,
	Title,
	Subtitle,
	Thumbnail,
} from './styles';

class Grid extends React.Component {
	render() {
		const { items } = this.props;

		return (
			<GridComponent>
				{items.map(({ node: post }) => (
					<Item key={post.id}>
						<Thumbnail image={post.frontmatter.thumbnail} />
						<GridLink to={post.fields.slug}>
							<Title>{post.frontmatter.title}</Title>
							<Subtitle>{post.frontmatter.date}</Subtitle>
						</GridLink>
					</Item>
				))}
			</GridComponent>
		);
	}
}

Grid.propTypes = {
	items: PropTypes.array,
};

export default Grid;
