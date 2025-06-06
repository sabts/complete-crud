import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: aliceblue;
	border-radius: 24px;
	padding: 1rem;
	gap: 1rem;
`;

const StyledPicture = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
`;

const StyledStatus = styled.div`
	color: ${props => (props.$active ? 'green' : 'red')};
	position: relative;

	&::before {
		content: '';
		position: absolute;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		left: -15px;
		top: 10%;
		background-color: ${props => (props.$active ? 'green' : 'red')};
	}
`;

export { StyledDiv, StyledPicture, StyledStatus };
