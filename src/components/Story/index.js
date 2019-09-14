import React from 'react';
// import PropTypes from 'prop-types';
import { Parallax, ParallaxLayer } from 'react-spring/addons';

import * as S from './styles';

class Story extends React.Component {
  render() {
    return (
      <S.Inner>
        <Parallax
          ref={ref => (this.parallax = ref)}
          scrolling
          horizontal={false}
          pages={11}
        >
          <S.River />
          <ParallaxLayer
            speed={-2}
            factor={2}
            offset={0}
            onClick={() => this.parallax.scrollTo(2)}
          >
            <h2>Intro</h2>
            <p>My career has always been a little higgled-ypiggledy.</p>
            <p>I follow what I'm curious about and let that lead me.</p>
            <p>
              It's sometimes difficult to explain who I am, where I come from,
              what makes me tick...
            </p>
          </ParallaxLayer>
          <ParallaxLayer speed={0.5} factor={1} offset={2}>
            <h2>LaGuardia, Arizona & Science</h2>
            <p>I was always artistic</p>
            <p>Playing piano...</p>
          </ParallaxLayer>
          {/*
          <ParallaxLayer speed={-2} factor={1} offset={3}>
            <h2>Literature, Hayot, Publishing, magazines</h2>
          </ParallaxLayer>
          <ParallaxLayer speed={-1} factor={1} offset={4}>
            <h2>The future of the book, coding</h2>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={5}>
            <h2>England, MzTEK, Women in Tech</h2>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={6}>
            <h2>SHOWstudio, frontend development, freelancing</h2>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={7}>
            <h2>Gardening to counterbalance the time behind screens</h2>
            <p>Hiking up in the catskills...</p>
            <p>Monty Don, Sebago, </p>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={8}>
            <h2>Climate</h2>
            <p>Foer book, mexico, NYtimes article</p>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={9}>
            <h2>The switch project, looking for work in climate change</h2>
            <p>Digital climate strike</p>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={10}>
            <h2>IBM</h2>
          </ParallaxLayer>
          <ParallaxLayer speed={-2} factor={1} offset={11}>
            <h2>And here I am</h2>
					</ParallaxLayer>
					*/}
        </Parallax>
        <S.Fade />
      </S.Inner>
    );
  }
}

// Story.propTypes = {

// };

// Story.defaultProps = {

// };

export default Story;
