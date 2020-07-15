import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import Api from './models/api';
import firebase from './models/Firebase';

import { IBeach, IFilterData } from './models/models';
import BeachesFilter from './components/BeachesFilter';

const App: React.FC = () => {
	const [beaches, setBeaches] = useState<IBeach[]>([]);
	const [beachesFiltered, setBeachesFiltered] = useState<IBeach[]>([]);
	const [states, setStates] = useState<string[]>([]);
	const [filter, setFilter] = useState<IFilterData>({query: '', selectedState: ''});

	const getData = async (): Promise<void> => {
		const response = await Api.getBeachesData();

		for await (const beach of response.data) {
			await firebase.getImageURL(beach.picture).then(url => beach.picture = url);
			setBeaches(beaches => [...beaches, beach]);
			setBeachesFiltered(beaches => [...beaches, beach]);
		}
	};

	useEffect(() => {
		getData();
	}, []); // eslint-disable-line

	useEffect(() => {
		setBeachesFiltered(beaches.filter(beach => {
			return beach.name.toUpperCase().indexOf(filter.query.toUpperCase()) !== -1 && (filter.selectedState === '' || beach.state === filter.selectedState);
		}));
	}, [filter]);

	useEffect(() => {
		setStates(beaches.map(beach => beach.state).filter((value, index, self) => self.indexOf(value) === index));
	}, [beaches]);

	return (
		<div>
			<BeachesFilter states={states} setFilter={(filter) => setFilter(filter)} />
			{JSON.stringify(beachesFiltered)}
			<GlobalStyle />
			<span>Favicon by <a href="http://www.kameleon.pics ">http://www.kameleon.pics</a></span>
		</div>
	);
};

export default App;
