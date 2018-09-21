import React from 'react';
import { Link } from 'gatsby';
// import logo from '../img/logo.svg'
import { BannerComponent, Title, Contact } from './styles';

const Banner = () => (
	<BannerComponent>
		<Title>
			<Link to="/">Sally Northmore</Link>
		</Title>
		<Contact
			href="https://www.linkedin.com/in/sally-northmore-5568489/"
			target="_blank"
			rel="noreferrer noopener"
		>
			Contact
		</Contact>
	</BannerComponent>
);

// <Link to="/about" className="Title">
// 	About
// </Link>

export default Banner;
