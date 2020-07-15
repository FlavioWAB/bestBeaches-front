import styled from 'styled-components';

export const BeachEmptyContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	&:not(:first-of-type) {
		display:none;
	}
`;

export const BeachEmptyImage = styled.img`
	width: 100%;
    max-width: 300px;
	border-radius: 10px;
	margin: 5rem 0;
`;

export const BeachEmptyContent = styled.p`
`;
