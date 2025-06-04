const UserCard = ({profilePicture, fullName, email, username, active}) => {
	return (
		<>
			<img src={profilePicture} alt="profile picture"/>
			<h2>{fullName}</h2>
			<span>{email}</span>
			<span>@{username}</span>
			<p>{active ? 'Active' : 'Inactive'}</p>
			<button>DETAILS</button>
		</>
	);
};

export default UserCard;
