import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import { Content } from './content.js';
import * as S from './styles';

class Story extends React.Component {
  render() {
    return (
      <S.Story>
        <S.Inner>
          <Parallax
            ref={ref => (this.parallax = ref)}
            scrolling
            horizontal={false}
            pages={Content.length}
          >
            <ParallaxLayer offset={0} factor={10} speed={0.6}>
              <S.River />
            </ParallaxLayer>
            <ParallaxLayer offset={10} factor={10} speed={0.6}>
              <S.River />
            </ParallaxLayer>

            {Content.map((item, i) => (
              <ParallaxLayer key={i} speed={0.2} offset={item.offset}>
                <S.Text>{item.text}</S.Text>
              </ParallaxLayer>
            ))}
          </Parallax>
          <S.FadeTop />
          <S.FadeBottom />
        </S.Inner>
      </S.Story>
    );
  }
}

export default Story;
