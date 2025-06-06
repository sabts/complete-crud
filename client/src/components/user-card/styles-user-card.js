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
	margin-bottom: 1.5rem;
`;

const StyledPicture = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
`;

const StyledStatus = styled.div`
	display: flex;
	justify-content: center;
	color: ${props => (props.$active ? 'green' : 'red')};
	position: relative;
	width: 70px;

	&::before {
		content: '';
		position: absolute;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		left: -10px;
		top: 10%;
		background-color: ${props => (props.$active ? 'green' : 'red')};
	}
`;

const StyledButton = styled.button`
	background-color: white;
	border: 2px solid #6ba4c8;
	color: #6ba4c8;
	padding: 0.5rem;
	border-radius: 8px;
`;

export { StyledDiv, StyledPicture, StyledStatus, StyledButton };
