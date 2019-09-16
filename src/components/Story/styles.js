import styled, { keyframes, css } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export const Story = styled.div`
  background: #fdf6d8 repeat-y;
  font-family: var(--serif);
  font-size: 2rem;
  min-height: 100vh;
  width: 100%;
`;

const fadeIn = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeRiver = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
		transform: translateY(-50px);
  }
`;

export const Inner = styled.div`
  animation-delay: 1.5s;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  opacity: 0;
  z-index: 3;
`;

export const Text = styled.p`
  color: inherit;
  margin-left: 3rem;
  max-width: 500px;
  text-align: left;
  padding: 0 3rem 0 0;

  & span {
    display: block;
    text-align: right;
    margin-top: 2rem;
  }
`;

export const Video = styled.div`
  max-width: 500px;
  margin: auto 10% auto auto;
  text-align: right;

  > iframe {
    width: 100%;
  }
`;

export const Slide = styled.div`
  opacity: ${ifProp('isVisible', '1', '0.5')};
  transition: 1s opacity ease-in;
  z-index: 4;

  ${switchProp('slideStyle', {
    space: css`
      background-color: rgba(0, 0, 0, 1);
      min-height: 120vh;
      /* padding-top: 30vh; */
      color: white;
      position: relative;
      opacity: 1;

      &::before {
        content: '';
        display: block;
        height: 80%;
        width: 100%;
        position: absolute;
        background: black url('/img/starts.jpg') bottom center;
        background-size: contain;
        opacity: 0.5;
      }
    `,
    film: css`
      align-items: ${ifProp('hasMedia', 'center', 'auto')};
      display: flex;
      background-color: rgba(0, 0, 0, 0.8);
      min-height: 150vh;
      color: white;
      padding-top: 20vh;
      opacity: ${ifProp('isVisible', '1', '0.9')};
    `,
    nyc: css`
      background: black url('/img/nyc.jpg') top center;
      background-size: cover;
      min-height: 115vh;
      opacity: 1;
    `,
    whiteText: css`
      color: white;
    `
  })};
`;

export const River = styled.div`
  animation-delay: 3s;
  animation-name: ${fadeRiver};
  animation-duration: 2s;
  animation-direction: normal;
  animation-fill-mode: forwards;

  background: url('/img/river2.svg') top center repeat-y;
  background-size: contain;

  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;

export const FadeTop = styled.div`
  background: linear-gradient(#fdf6d8, transparent);
  background-size: contain;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const FadeBottom = styled.div`
  background: linear-gradient(transparent, #fdf6d8 100%);
  background-size: contain;
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0;
`;
