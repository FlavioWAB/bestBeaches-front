import React, { useState, useEffect } from 'react';
import { BeachesFilterSearch, BeachesFilterState, BeachesFilterContainer, BeachesFilterLabel } from './styles';
import { IBeachesFilter } from '../../../models/models';
import BrazilianStates from '../../../utils/states';

const BeachesFilter: React.FC<IBeachesFilter> = ({ states, setFilter }) => {

	const [selectedState, setSelectedState] = useState<string>('');
	const [query, setQuery] = useState<string>('');

	useEffect(() => {
		setFilter({ query, selectedState });
	}, [query, selectedState]); // eslint-disable-line

	return (
		<BeachesFilterContainer>
			<BeachesFilterLabel htmlFor="FiltroNome">Nome</BeachesFilterLabel>
			<BeachesFilterSearch id="FiltroNome" type="text" onChange={(event) => setQuery(event.target.value)} />
			<BeachesFilterLabel htmlFor="FiltroEstado">Estados</BeachesFilterLabel>
			<BeachesFilterState id="FiltroEstado" defaultValue="0" onChange={(event) => setSelectedState(event.target.value)}>
				<option value="">Todos</option>
				{states.map((state: string) => <option key={state} value={state}>{BrazilianStates[state]}</option>)}
			</BeachesFilterState>
		</BeachesFilterContainer>
	);
};

export default BeachesFilter;
