import React from 'react';
import beachEmpty from '../../../assets/beach-empty.png';
import { BeachEmptyContainer, BeachEmptyImage, BeachEmptyContent } from './styles';

const BeachEmpty: React.FC = () => {

	return (
		<BeachEmptyContainer>
			<BeachEmptyImage src={beachEmpty} />
			<BeachEmptyContent className="secondaryDataFontSize">Não houve nenhum resultado para a sua busca</BeachEmptyContent>
		</BeachEmptyContainer>
	);
};

export default BeachEmpty;
