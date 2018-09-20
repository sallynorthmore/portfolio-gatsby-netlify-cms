import React from 'react';
import { Link } from 'gatsby';
// import logo from '../img/logo.svg'

const Banner = () => (
	<header className="Banner">
		<Link to="/" className="Banner-title">
			Sally Northmore
		</Link>
		<a
			href="https://www.linkedin.com/in/sally-northmore-5568489/"
			target="_blank"
			rel="noreferrer noopener"
			className="Banner-link"
		>
			Contact
		</a>
	</header>
);

// <Link to="/about" className="Title">
// 	About
// </Link>

export default Banner;
