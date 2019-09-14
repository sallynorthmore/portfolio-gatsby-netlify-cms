import styled, { keyframes } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export const Story = styled.div`
  background: #fdf6d8 repeat-y;
  font-family: var(--serif);
  font-size: 2rem;
  min-height: 100vh;
  padding: 0 0 0 1rem;
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
`;

export const Text = styled.p`
  margin-left: 3rem;
  max-width: 500px;
  text-align: left;
  opacity: ${ifProp('isVisible', '1', '0')};
  transition: 1s opacity ease-out;

  & span {
    display: block;
    text-align: right;
    margin-top: 2rem;
  }
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
`;

export const FadeTop = styled.div`
  background: linear-gradient(#fdf6d8, transparent);
  background-size: contain;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const FadeBottom = styled.div`
  background: linear-gradient(transparent, #fdf6d8 100%);
  background-size: contain;
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;
