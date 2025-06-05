import { StyledDiv, StyledPicture } from './styles-user-card';

const UserCard = ({ profilePicture, fullName, email, username, active }) => {
	return (
		<>
			<StyledDiv>
				<StyledPicture src={profilePicture} alt='profile picture' />
				<h2>{fullName}</h2>
				<span>{email}</span>
				<span>@{username}</span>
				<p>{active ? 'Active' : 'Inactive'}</p>
				<button>DETAILS</button>
			</StyledDiv>
		</>
	);
};

export default UserCard;
