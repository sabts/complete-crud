import { Link, useParams } from 'react-router';
import { StyledDiv, StyledPicture } from './styled-user-profile';
import { useEffect, useState } from 'react';
import { getDataById, updateDataById } from '../../lib/utils/api';

const UserProfile = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [isEditing, setIsEditing] = useState([]);

	useEffect(() => {
		getDataUser(setUser, id);
		updateUserData(setIsEditing, isEditing, id);
	}, []);
	return (
		<>
			<Link to='/'>
				<button>back to users</button>
			</Link>
			<StyledDiv>
				<StyledPicture src={user.profilePicture} alt='profile picture' />
				<h2>{user.fullName}</h2>
				<span>{user.email}</span>
				<span>@{user.username}</span>
				<span>{user.active ? 'Active' : 'Inactive'}</span>
				<span>Gender:{user.gender}</span>
				<span>Date of Birth:{user.dateOfBirth}</span>
				<span>Phone Number:{user.phoneNumber}</span>
				<button>EDIT</button>
			</StyledDiv>
		</>
	);
};

const getDataUser = async (setUser, isEditing, id) => {
	const user = await getDataById(isEditing, id);
	setUser(user);
};

const updateUserData = async (setIsEditing, id) => {
	const isEdited = await updateDataById(id);
	setIsEditing(isEdited);
};

export default UserProfile;
