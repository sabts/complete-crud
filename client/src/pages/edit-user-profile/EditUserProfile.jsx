const EditUserProfile = () => {
	return (
		<form>
			<img src={user.profilePicture} alt='profile picture' />
			<div>
				<label htmlFor='state'>Active</label>
				<input type='checkbox' id='state' />
			</div>
			<div>
				<label htmlFor='fullName'>Name</label>
				<input type='text' id='fullName'>
					{user.fullName}
				</input>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email'>
					{user.email}
				</input>
			</div>
			<div>
				<label htmlFor='dateOfBirth'>Date of Birth</label>
				<input type='text' id='dateOfBirth'>
					{user.dateOfBirth}
				</input>
			</div>
			<div>
				<label htmlFor='phone'>Phone</label>
				<input type='text' id='phone'>
					{user.phoneNumber}
				</input>
			</div>
			<input type='submit'>EDIT</input>
		</form>
	);
};

export default EditUserProfile;
