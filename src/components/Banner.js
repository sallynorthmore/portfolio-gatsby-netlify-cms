import React from 'react';
import { Link } from 'gatsby';
// import logo from '../img/logo.svg'

const Banner = () => (
	<header className="Banner">
		<Link to="/" className="Title">
			Sally Northmore
		</Link>
	</header>
);

// <Link to="/contact" className="Title">
// 	Contact
// </Link>
// <Link to="/about" className="Title">
// 	About
// </Link>

export default Banner;
