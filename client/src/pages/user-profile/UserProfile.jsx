import { Link, useLocation } from "react-router";

const UserProfile = () => {
	const { state } = useLocation();
	const { user} = state
	;
	return <>
	<Link to="/">
	<button>back to users</button>
	</Link>
		<img src={user.profilePicture} alt="profile picture"/>
			<h2>{user.fullName}</h2>
			<span>{user.email}</span>
			<span>@{user.username}</span>
			<span>{user.active ? 'Active' : 'Inactive'}</span>
			<span>Gender:{user.gender}</span>
			<span>Date of Birth:{user.dateOfBirth}</span>
			<span>Phone Number:{user.phoneNumber}</span>
			<button>EDIT</button>
	</>;
};
export default UserProfile;
