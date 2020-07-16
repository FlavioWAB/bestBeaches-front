import React from 'react';
import { IBeachCard } from '../../../models/models';
import random from '../../../utils/random';
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

	const rightPos: number = random(0, 100);
	const leftPos: number = random(0, 100);
	const firstIcon: number = random(0, 13);
	const secondIcon: number = random(0, 13, firstIcon);

	return (
		<BeachCardContainer
			rightPos={rightPos}
			leftPos={leftPos}
			firstIcon={firstIcon}
			secondIcon={secondIcon}
		>
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
