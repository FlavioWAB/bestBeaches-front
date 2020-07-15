import React from 'react';
import { IBeachCard } from '../../../models/models';
import {
	BeachCardContainer,
	BeachImage,
	BeachTitleContainer,
	BeachName,
	BeachLocation,
	BeachDescription,
	BeachTitleWrapper,
	CardShadow
} from './styles';

const BeachCard: React.FC<IBeachCard> = ({ beach }) => {

	return (
		<BeachCardContainer>
			<BeachTitleWrapper>
				<BeachImage src={beach.picture} alt={beach.name} />
				<CardShadow />
				<BeachTitleContainer>
					<BeachName>{beach.name}</BeachName>
					<BeachLocation className="secondaryDataFontSize">{beach.location} - {beach.state}</BeachLocation>
				</BeachTitleContainer>
			</BeachTitleWrapper>
			<BeachDescription className="secondaryDataFontSize">{beach.description}</BeachDescription>
		</BeachCardContainer>
	);
};

export default BeachCard;
