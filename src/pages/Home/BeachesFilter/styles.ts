import styled from 'styled-components';
import colors from '../../../styles/colors';

const filterInputStyle = `	
	border: solid 1px ${colors.inputBorder};
	border-radius: 0.2rem;
	font-size: 2rem;
	padding: 0.4rem;
	background: transparent;
	margin-bottom: 1rem;
`;

export const BeachesFilterSearch = styled.input`
	${filterInputStyle}
`;

export const BeachesFilterState = styled.select`
	${filterInputStyle}
	font-family: 'Montserrat';
`;

export const BeachesFilterContainer = styled.div`
	display: flex;
	margin: 1.5rem 0;
	flex-direction: column;
`;

export const BeachesFilterLabel = styled.label`
`;