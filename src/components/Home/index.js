import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import Footer from '../Footer';
import { HomeComponent, Headline, Title, Projects } from './styles';

import {} from './styles';

const Home = ({ projects }) => {
	return (
		<HomeComponent>
			<Headline>
				<span>
					I&rsquo;m a freelance frontend web developer living and working in
					London
				</span>
			</Headline>

			<Projects id="projects">
				<Title>
					<a href="#projects">Some things I&rsquo;ve built</a>
				</Title>

				<Grid items={projects} />
			</Projects>
			<Footer anchor="#projects" />
		</HomeComponent>
	);
};

Home.propTypes = {
	projects: PropTypes.array,
};

export default Home;
