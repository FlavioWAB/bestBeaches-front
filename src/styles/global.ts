import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}
`;
