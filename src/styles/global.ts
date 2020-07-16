import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: 'Amatic SC';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v13/TUZyzwprpvBS1izr_vOEBOSfQZQ.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	@font-face {
		font-family: 'Amatic SC';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v13/TUZyzwprpvBS1izr_vOECuSf.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		vertical-align:baseline;
		list-style:none;
		border:0
	}

	body {
		font-family: 'Montserrat';
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	.secondaryDataFontSize{	
		font-size: 1rem;
		@media (min-width: 768px){
			font-size: 1.5rem;
		}
	}
`;
