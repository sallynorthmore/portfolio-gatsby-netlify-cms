import React, { Component } from 'react';
import { Link } from 'gatsby';
import { BannerComponent, Title, Contact } from './styles';

class Banner extends Component {
	state = {
		isExpanded: true,
		hasFaded: false,
	};

	componentWillMount = () => {
		// Are we coming from another page within the app? (ie, has already faded in)
		if (this.props.location) {
			this.setState({
				hasFaded: true,
			});
		}
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.onScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		const y = window.scrollY;
		if (y > 300) {
			this.setState({
				isExpanded: false,
			});
		} else {
			if (y < 300) {
				this.setState({
					isExpanded: true,
				});
			}
		}
	};

	render() {
		const { isExpanded, hasFaded } = this.state;

		return (
			<BannerComponent
				ref={el => {
					this.bannerEl = el;
				}}
				isExpanded={isExpanded}
				hasFaded={hasFaded}
			>
				<Title>
					<Link to="/">Sally Northmore</Link>
				</Title>
				<Contact to="/contact">Contact</Contact>
				<Contact to="/about">About</Contact>
			</BannerComponent>
		);
	}
}

export default Banner;
