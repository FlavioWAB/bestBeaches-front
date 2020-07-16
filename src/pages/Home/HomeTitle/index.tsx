import React from 'react';
import {
	HomeTitleContainer,
	HomeTitleLogo,
	HomeTitleName,
	HomeTitleDescription
} from './styles';
import companyLogo from '../../../assets/company-logo.png';

const HomeTitle: React.FC = () => {

	return (
		<HomeTitleContainer>
			<HomeTitleLogo src={companyLogo} alt="Logo da Beast Beaches" />
			<HomeTitleName>Best Beaches</HomeTitleName>
			<HomeTitleDescription className="secondaryDataFontSize">O Brasil é um país muito rico em belezas naturais. Do norte ao sul você vai encontrar destinos que valem a pena serem visitados, no entanto, o que atrai turistas de todas as partes do mundo são as praias paradisíacas no Brasil. Pensando nisso, nós elaboramos um guia com top 12 praias do Brasil.</HomeTitleDescription>
		</HomeTitleContainer>
	);
};

export default HomeTitle;
