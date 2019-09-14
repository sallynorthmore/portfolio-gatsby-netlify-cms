import { injectGlobal } from 'styled-components';

export default function BaseStyles() {
  return injectGlobal`
		@import url('https://fonts.googleapis.com/css?family=Lato:400,900');
		@import url("https://use.typekit.net/kox2esi.css");

		@import url('https://fonts.googleapis.com/css?family=Alegreya|Amatic+SC|Caveat|Cormorant+Garamond|La+Belle+Aurore&display=swap');

/*
		font-family: 'Caveat', cursive;
		font-family: 'La Belle Aurore', cursive;
		font-family: 'Amatic SC', cursive;
		font-family: 'Cormorant Garamond', serif; */

		:root {
			--handwriting: 'Amatic SC', cursive;
			--serif: 'Alegreya', serif;
		}

		/* Minimal reset that keeps insepector output clean */
		/* stylelint-disable selector-max-universal, selector-max-type  */
		*,
		*::before,
		*::after {
			border: 0;
			box-shadow: 0 0 0;
			box-sizing: border-box;
			color: rgb(20, 20, 20);
			/* font-family: 'Lato', sans-serif; */
			font-feature-settings: "kern" 1;
			font-kerning: normal;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		a {
			color: inherit;
		}

		html {
			scroll-behavior: smooth;
			scroll-snap-type: y mandatory;
		}



		/* stylelint-enable */
	`;
}
