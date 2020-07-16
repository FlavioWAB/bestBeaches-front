import React from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import AppWrapper from './components/AppWrapper';

const App: React.FC = () => {

	return (
		<AppWrapper>
			<Home />
			<GlobalStyle />
		</AppWrapper>
	);
};

export default App;
