import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';

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
			<div className="ProjectLinks">
				{previous && (
					<Link to={previous.fields.slug} className="ProjectLinks-link">
						<abbr title="Previous project">⇦</abbr>
					</Link>
				)}
				{next && (
					<Link to={next.fields.slug} className="ProjectLinks-link">
						<abbr title="Next project">⇨</abbr>
					</Link>
				)}
			</div>
		);
	}
}

ProjectLinks.propTypes = {
	next: PropTypes.object,
	previous: PropTypes.object,
};

export default ProjectLinks;
