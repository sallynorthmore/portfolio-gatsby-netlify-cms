import styled from 'styled-components';

export const Inner = styled.div`
  background: #fdf6d8 repeat-y;
  padding: 0 0 0 2rem;
  min-height: 100vh;
  width: 100%;
  font-family: var(--handwriting);
  font-size: 2rem;
`;

export const River = styled.div`
  background: url('/img/river2.svg') top center;
  background-size: contain;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
