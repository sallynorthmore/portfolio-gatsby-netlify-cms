import React from 'react';
import { Link } from 'gatsby';
// import logo from '../img/logo.svg'

const Navbar = () => (
	<nav className="navbar is-transparent">
		<div className="container">
			<h1>Sally Northmore</h1>
			{/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
			<Link to="/about">About</Link>
		</div>
	</nav>
);

export default Navbar;
