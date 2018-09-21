import React from 'react';
import PropTypes from 'prop-types';
import { GridComponent, Item, GridLink, Title, Subtitle } from './styles';

class Grid extends React.Component {
	render() {
		const { items } = this.props;

		return (
			<GridComponent>
				{items.map(({ node: post }) => (
					<Item key={post.id}>
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
