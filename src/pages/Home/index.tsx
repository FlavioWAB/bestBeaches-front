import React, { useEffect, useState } from 'react';
import Api from '../../models/api';
import firebase from '../../models/Firebase';

import { IBeach, IFilterData } from '../../models/models';
import BeachesFilter from './BeachesFilter';
import {
	HomeSection,
	Divider,
	HomeCredit
} from './styles';
import BeachCard from './BeachCard';
import HomeTitle from './HomeTitle';

import Loader from '../../components/Loader/';
import BeachEmpty from './BeachEmpty';

const Home: React.FC = () => {
	const [beaches, setBeaches] = useState<IBeach[]>([]);
	const [beachesFiltered, setBeachesFiltered] = useState<IBeach[]>([]);
	const [states, setStates] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [filter, setFilter] = useState<IFilterData>({ query: '', selectedState: '' });

	const getBeaches = async (): Promise<void> => {
		const response = await Api.getBeachesData();

		for await (const beach of response.data) {
			await firebase.getImageURL(beach.picture).then(url => beach.picture = url);
			setBeaches(beaches => [...beaches, beach]);
			setBeachesFiltered(beaches => [...beaches, beach]);
		}

		setLoading(false);
	};

	useEffect(() => {
		getBeaches();
	}, []); // eslint-disable-line

	useEffect(() => {
		setBeachesFiltered(beaches.filter(beach => {
			return beach.name.toUpperCase().indexOf(filter.query.toUpperCase()) !== -1 && (filter.selectedState === '' || beach.state === filter.selectedState);
		}));
	}, [filter, beaches]);

	useEffect(() => {
		setStates(beaches.map(beach => beach.state).filter((value, index, self) => self.indexOf(value) === index));
	}, [beaches]);

	return (
		<>
			<HomeSection>
				<HomeTitle />
			</HomeSection>
			<Divider />
			<HomeSection>
				<BeachesFilter states={states} setFilter={(filter) => setFilter(filter)} />
			</HomeSection>
			<Divider />
			<HomeSection>
				{loading ? <Loader /> : <>
					{beachesFiltered.map(beach => <BeachCard key={beach.name} beach={beach} />)}
					<BeachEmpty />
				</>}
			</HomeSection>
			<Divider />
			<HomeSection>
				<HomeCredit>Illustrations by <a href="rawpixel.com">rawpixel.com</a> - <a href='https://www.freepik.com/free-photos-vectors/background'>www.freepik.com</a></HomeCredit>
				<HomeCredit>Favicon by <a href="http://www.kameleon.pics ">http://www.kameleon.pics</a></HomeCredit>
			</HomeSection>
		</>
	);
};

export default Home;
