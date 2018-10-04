import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown } from 'react-icons/fa';
import { FooterComponent, Inner, Anchor } from './styles';

class Footer extends React.Component {
	state = {
		isVisible: true,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// Hide arrow
	handleScroll = () => {
		this.setState({
			isVisible: false,
		});
	};

	render() {
		const { anchor } = this.props;
		const { isVisible } = this.state;

		return (
			<FooterComponent>
				{isVisible && (
					<Inner>
						<Anchor href={anchor}>
							<FaArrowDown />
						</Anchor>
					</Inner>
				)}
			</FooterComponent>
		);
	}
}

Footer.propTypes = {
	anchor: PropTypes.string,
};

export default Footer;
