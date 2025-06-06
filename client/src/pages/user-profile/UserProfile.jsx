import { Link, useNavigate, useParams } from 'react-router';
import { StyledDiv, StyledMainContainer, StyledPicture } from './styled-user-profile';
import { useEffect, useState } from 'react';
import { getDataById, updateDataById } from '../../lib/utils/api';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const {register, handleSubmit } = useForm();
	const navigate = useNavigate()

	useEffect(() => {
		getDataUser(setUser, id);
	}, [id]);

	if(!user) {
		return <h2>No User</h2>
	}
	const {
		active, 
		profilePicture, 
		fullName, 
		email, 
		username, 
		dateOfBirth, 
		gender, 
		phoneNumber}= user;
		
	return (
		<StyledMainContainer>
			<Link to='/'>
				<button>back to users</button>
			</Link>
			<StyledDiv>
			{!isEditing ? (
					<>
						<StyledPicture src={user.profilePicture} alt='profile picture' />
						<h2>{user.fullName}</h2>
						<span>{user.email}</span>
						<span>@{user.username}</span>
						<span>{user.active ? 'Active' : 'Inactive'}</span>
						<span>Gender: {user.gender}</span>
						<span>Date of Birth: {user.dateOfBirth}</span>
						<span>Phone Number: {user.phoneNumber}</span>
						<div>
						<button onClick={() => setIsEditing(true)}>EDIT</button>
						<button>DELETE</button>
						</div>
					</>
				) : (
					<>
				<form onSubmit={handleSubmit(onSubmit)}>
						<img src={user.profilePicture} alt='profile picture' />
						<div>
							<label htmlFor='active'>Active</label>
							<input type='checkbox' id='active' defaultValue={user.active} />
						</div>
						<div>
							<label htmlFor='fullName'>Name</label>
							<input type='text' id='fullName' defaultValue={user.fullName} />
						</div>
						<div>
							<label htmlFor='email'>Email</label>
							<input type='email' id='email' defaultValue={user.email} />
						</div>
						<div>
							<label htmlFor='dateOfBirth'>Date of Birth</label>
							<input type='text' id='dateOfBirth' defaultValue={user.dateOfBirth} />
						</div>
						<div>
							<label htmlFor='phoneNumber'>Phone</label>
							<input type='text' id='phoneNumber' defaultValue={user.phoneNumber} />
						</div>
						<input type='submit' value='SAVE CHANGES' />
					</form>
						<button onClick={() => setIsEditing(false)}>CANCEL</button>
						</>
				)}
			</StyledDiv>
			</StyledMainContainer>
	);
}

const getDataUser = async (setUser, id) => {
	const user = await getDataById(id);
	setUser(user);
};

const updateUserData = async (id, data, setUser, setIsEditing) => {
	const body = {
		fullName: data.fullName,
		email: data.email,
		dateOfBirth: data.dateOfBirth,
		phoneNumber: data.phoneNumber,
		active: data.active,
	};
	const updatedUser = await updateDataById(id, body);
	setUser(updatedUser);
	setIsEditing(false);
};
export default UserProfile;
