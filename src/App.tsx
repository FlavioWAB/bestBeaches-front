import React, { useEffect, useState, useCallback } from 'react';
import GlobalStyle from './styles/global';
import Api from './models/api';
import Firebase from './models/Firebase';

import { IBeach } from './models/models';

const App: React.FC = () => {
	const [beaches, setBeaches] = useState<IBeach[]>([]);
	const firebase = new Firebase();

	const getData = useCallback(async (): Promise<void> => {
		const response = await Api.getBeachesData();

		for await (const beach of response.data) {
			await firebase.getImageURL(beach.picture).then(url => beach.picture = url);
			setBeaches(beaches => [...beaches, beach]);
		}
	},[]); // eslint-disable-line

	useEffect(() => {
		getData();
	},[getData]);

	return (
		<div>
			<GlobalStyle />
			<span>Favicon by <a href="http://www.kameleon.pics ">http://www.kameleon.pics</a></span>
		</div>
	);
};

export default App;
