import { StyledDiv, StyledPicture, StyledStatus } from './styles-user-card';

const UserCard = ({ profilePicture, fullName, email, username, active }) => {
	return (
		<>
			<StyledDiv>
				<StyledPicture src={profilePicture} alt='profile picture' />
				<h2>{fullName}</h2>
				<span>{email}</span>
				<span>@{username}</span>
				<StyledStatus $active={active}>
				{active ? 'Active' : 'Inactive'}</StyledStatus>
				<button>DETAILS</button>
			</StyledDiv>
		</>
	);
};

export default UserCard;
