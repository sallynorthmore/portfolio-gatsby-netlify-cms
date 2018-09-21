import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ProjectLinksComponent, Button } from './styles';

class ProjectLinks extends React.Component {
	componentDidMount = () => {
		window.addEventListener('keydown', this.handleKeyDown, false);
	};

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	goNext = () => navigate(this.props.next.fields.slug);

	goPrevious = () => navigate(this.props.previous.fields.slug);

	handleKeyDown = e => {
		if (e.key === 'ArrowRight' && this.props.next) {
			this.goNext();
		} else if (e.key === 'ArrowLeft' && this.props.previous) {
			this.goPrevious();
		}
	};

	render() {
		const { previous, next } = this.props;

		return (
			<ProjectLinksComponent>
				{previous && (
					<Button to={previous.fields.slug}>
						<abbr title="Previous project">⇦</abbr>
					</Button>
				)}
				{next && (
					<Button to={next.fields.slug}>
						<abbr title="Next project">⇨</abbr>
					</Button>
				)}
			</ProjectLinksComponent>
		);
	}
}

ProjectLinks.propTypes = {
	next: PropTypes.object,
	previous: PropTypes.object,
};

export default ProjectLinks;
