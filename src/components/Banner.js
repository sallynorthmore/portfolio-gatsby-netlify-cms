import React from 'react';
import { Link } from 'gatsby';
// import logo from '../img/logo.svg'

const Banner = () => (
	<header className="Banner">
		<h1>Sally Northmore</h1>
		<p>Frontend Web Developer</p>
		{/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
		<Link to="/about">About</Link>
	</header>
);

export default Banner;
