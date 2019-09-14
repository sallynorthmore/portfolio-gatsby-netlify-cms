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
          <ParallaxLayer factor={1} offset={1}>
            <span onClick={() => this.parallax.scrollTo(1)}>
              Layers can contain anything
            </span>
            <h2>Intro</h2>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={2}>
            <h2>LaGuardia, Arizona & Science</h2>
            <p>I was always artistic</p>
            <p>Playing piano...</p>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={3}>
            <h2>Literature, Hayot, Publishing, magazines</h2>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={4}>
            <h2>The future of the book, coding</h2>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={5}>
            <h2>England, MzTEK, Women in Tech</h2>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={6}>
            <h2>SHOWstudio, frontend development, freelancing</h2>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={7}>
            <h2>Gardening to counterbalance the time behind screens</h2>
            <p>Hiking up in the catskills...</p>
            <p>Monty Don, Sebago, </p>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={8}>
            <h2>Climate</h2>
            <p>Foer book, mexico, NYtimes article</p>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={9}>
            <h2>The switch project, looking for work in climate change</h2>
            <p>Digital climate strike</p>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={10}>
            <h2>IBM</h2>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={11}>
            <h2>And here I am</h2>
          </ParallaxLayer>
        </Parallax>
      </S.Inner>
    );
  }
}

// Story.propTypes = {

// };

// Story.defaultProps = {

// };

export default Story;
