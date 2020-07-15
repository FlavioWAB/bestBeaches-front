import styled from 'styled-components';
import zIndexes from '../../../styles/zIndexes';

export const BeachCardContainer = styled.div`
	width: 100%;
	margin-bottom: 1rem;
    :not(:nth-last-child(2)){
		border-bottom: 1px solid #d4d4d4;
    	padding-bottom: 2rem;
	}
`;
export const BeachImage = styled.img`
	width: 100%;
	vertical-align: bottom
`;
export const BeachTitleContainer = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	padding: 1rem;
	color: white;
	z-index: ${zIndexes.beachCardTitle};
`;
export const BeachName = styled.div`    
	font-family: 'Amatic SC';
	font-size: 2.2rem;	
    @media (min-width: 768px){
		font-size: 4.2rem;
    }	
    @media (min-width: 1100px){		
		font-size: 7.2rem;
    }
`;

export const BeachLocation = styled.div``;
export const BeachDescription = styled.div``;
export const BeachTitleWrapper = styled.div`
	margin-bottom: 1.5rem;
	position: relative;
    display: flex;
    justify-content: center;
	overflow: hidden;
`;
export const CardShadow = styled.div`
	z-index: ${zIndexes.beachCardShadow};
	position: absolute;
	bottom: 0;
	box-shadow: inset 0 -60px 66px -7px rgb(0, 0, 0);
	width: 250%;
	height: 200%;
    @media (min-width: 768px){
		box-shadow: inset 0 -60px 64px 36px rgb(0,0,0);
    }
`;