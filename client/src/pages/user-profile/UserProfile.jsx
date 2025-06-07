import { Link, useNavigate, useParams } from 'react-router';
import {
	StyledDiv,
	StyledMainContainer,
	StyledPicture
} from './styled-user-profile';
import { useEffect, useState } from 'react';
import {
	deleteDataById,
	getDataById,
	updateDataById
} from '../../lib/utils/api';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const { handleSubmit } = useForm();
	const navigate = useNavigate();

	useEffect(() => {
		getDataUser(setUser, id);
	}, [id]);

	if (!user) {
		return <h2>No User</h2>;
	}

	const {
		active,
		profilePicture,
		fullName,
		email,
		username,
		dateOfBirth,
		gender,
		phoneNumber
	} = user;

	const onSubmit = async data => {
		await updateUserData(id, data, setUser, setIsEditing);
	};

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
							<button onClick={() => deleteUser(id, navigate)}>DELETE</button>
						</div>
					</>
				) : (
					<>
						<form
						onSubmit={event => updateUser(id, event, setUser, setIsEditing)}
						>
							<img src={user.profilePicture} alt='profile picture' />
							<div>
								<label htmlFor='active'>Active</label>
								<input
									type='checkbox'
									id='active'
									name='active'
									defaultChecked={user.active}
								/>
							</div>
							<div>
								<label htmlFor='fullName'>Name</label>
								<input
									type='text'
									id='fullName'
									name='fullName'
									defaultValue={user.fullName}
								/>
							</div>
							<div>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									id='email'
									name='email'
									defaultValue={user.email}
								/>
							</div>
							<div>
								<label htmlFor='dateOfBirth'>Date of Birth</label>
								<input
									type='text'
									id='dateOfBirth'
									name='dateOfBirth'
									defaultValue={user.dateOfBirth}
								/>
							</div>
							<div>
								<label htmlFor='phoneNumber'>Phone</label>
								<input
									type='text'
									id='phoneNumber'
									name='phoneNumber'
									defaultValue={user.phoneNumber}
								/>
							</div>
							<input type='submit' value='SAVE CHANGES' />
						</form>
						<button onClick={() => setIsEditing(false)}>CANCEL</button>
					</>
				)}
			</StyledDiv>
		</StyledMainContainer>
	);
};

const getDataUser = async (setUser, id) => {
	const user = await getDataById(id);
	setUser(user);
};

const updateUser = async (id, event, setUser, setIsEditing) => {
	event.preventDefault();
	const form = event.target;

	const body = {
		fullName: form.fullName.value,
		email: form.email.value,
		dateOfBirth: form.dateOfBirth.value,
		phoneNumber: form.phoneNumber.value,
		active: form.active.checked
	};

	const userUpdated = await updateDataById(id, body);
	setUser(userUpdated);
	setIsEditing(false);
};

const deleteUser = async (id, navigate) => {
	await deleteDataById(id);
	navigate('/');
};

export default UserProfile;
