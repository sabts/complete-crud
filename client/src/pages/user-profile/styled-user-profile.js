import styled from 'styled-components';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 2rem;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledPicture = styled.img`
	height: 200px;
	width: 200px;
	align-self: center;
	border-radius: 50%;
`;

export { StyledMainContainer, StyledDiv, StyledPicture };
