import React, { Component } from 'react';
import { Link } from 'gatsby';
import { BannerComponent, Title, Contact } from './styles';

class Banner extends Component {
	state = {
		isExpanded: true,
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
		const { isExpanded } = this.state;
		return (
			<BannerComponent
				ref={el => {
					this.bannerEl = el;
				}}
				isExpanded={isExpanded}
			>
				<Title>
					<Link to="/">Sally Northmore</Link>
				</Title>
				<Contact to="/contact">Contact</Contact>
			</BannerComponent>
		);
	}
}

export default Banner;
