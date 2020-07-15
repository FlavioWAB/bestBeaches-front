import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

export const Spin = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

export const LoaderElement = styled.div`	
	border: 16px solid ${colors.loaderSecondary};
	border-radius: 50%;
	border-top: 16px solid ${colors.secondaryColor};
	width: 120px;
	height: 120px;
	animation: ${Spin} 2s linear infinite;
`;

export const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 400px;
`;