import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
	state = {
		isVisible: true,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	// Hide arrow
	handleScroll = () => {
		this.setState({
			isVisible: false,
		});

		window.removeEventListener('scroll', this.handleScroll);
	};

	render() {
		const { anchor } = this.props;
		const { isVisible } = this.state;

		return (
			<div className="Footer">
				{isVisible && (
					<a href={anchor} className="Footer-arrow">
						⇩
					</a>
				)}
			</div>
		);
	}
}

Footer.propTypes = {
	anchor: PropTypes.string,
};

export default Footer;
