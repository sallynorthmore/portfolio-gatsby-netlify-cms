import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import Helmet from 'react-helmet';
import Content from '../Content';
import ProjectLinks from '../ProjectLinks';
import {
	ProjectComponent,
	Body,
	Client,
	Date,
	Description,
	Header,
	Nav,
	Tags,
	TagItem,
	TagLink,
	Title,
	Subtitle,
	ProjectBanner,
} from './styles';

export const Project = ({
	client,
	content,
	contentComponent,
	date,
	description,
	next,
	previous,
	tags,
	title,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<ProjectComponent>
			<Helmet title={`Project: ${title}`} />
			<ProjectBanner>
				<Banner />
			</ProjectBanner>

			<Header>
				<Title>
					{title}
					<Client>{client}</Client>
				</Title>
				<Description>{description}</Description>
			</Header>

			<Body>
				<PostContent content={content} />
				<Date>{date}</Date>
				{tags && tags.length ? (
					<Tags>
						<Subtitle>Made with:</Subtitle>
						{tags.map(tag => (
							<TagItem key={tag + `tag`}>
								<TagLink>{tag}</TagLink>
							</TagItem>
						))}
					</Tags>
				) : null}
			</Body>

			<Nav>
				<ProjectLinks previous={previous} next={next} />
			</Nav>
		</ProjectComponent>
	);
};

Project.propTypes = {
	client: PropTypes.string,
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	date: PropTypes.string,
	description: PropTypes.string,
	helmet: PropTypes.instanceOf(Helmet),
	next: PropTypes.object,
	previous: PropTypes.object,
	title: PropTypes.string,
	tags: PropTypes.node,
};

export default Project;
