import React, { useState, useEffect } from 'react';
import { BeachesFilterSearch, BeachesFilterState } from './styles';
import { IBeachesFilter } from '../../models/models';

const BeachesFilter: React.FC<IBeachesFilter> = ({ states, setFilter }) => {

	const [selectedState, setSelectedState] = useState<string>('');
	const [query, setQuery] = useState<string>('');

	useEffect(() => {
		setFilter({ query, selectedState });
	}, [query, selectedState]);

	return (
		<div>
			{selectedState}<br />
			{query}<br />
			<BeachesFilterSearch type="text" onChange={(event) => setQuery(event.target.value)} />
			<BeachesFilterState defaultValue="0" onChange={(event) => setSelectedState(event.target.value)}>
				<option value="">Todos</option>
				{states.map((state: string) => <option key={state} value={state}>{state}</option>)}
			</BeachesFilterState>
		</div>
	);
};

export default BeachesFilter;
