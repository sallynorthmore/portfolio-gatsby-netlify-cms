import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import VisibilitySensor from 'react-visibility-sensor';
import { Content } from './content.js';
import * as S from './styles';

class Story extends React.Component {
  render() {
    return (
      <S.Story>
        <S.FadeTop />
        <S.FadeBottom />
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

            {Content.map((item, i) => {
              const hasMedia = item.vimeo || item.image || false;

              return (
                <ParallaxLayer
                  factor={item.factor}
                  key={i}
                  speed={item.speed || 0.2}
                  offset={item.offset}
                >
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <S.Slide
                        hasMedia={hasMedia}
                        slideStyle={item.style}
                        isVisible={isVisible}
                      >
                        <S.Text>{item.text}</S.Text>
                        {item.vimeo && (
                          <S.Video>
                            <iframe
                              src={item.vimeo}
                              width="640"
                              height="480"
                              frameBorder="0"
                              allow="autoplay; fullscreen"
                              allowFullScreen
                            />
                          </S.Video>
                        )}
                      </S.Slide>
                    )}
                  </VisibilitySensor>
                </ParallaxLayer>
              );
            })}
          </Parallax>
        </S.Inner>
      </S.Story>
    );
  }
}

export default Story;
