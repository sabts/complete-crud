import { useEffect, useState } from 'react';
import { getAllData } from '../../lib/utils/api';
import UserCard from '../../components/user-card/userCard';
import { Link } from 'react-router';
import { StyledMainContainer } from './styled-home';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<StyledMainContainer>
		<div>
			{users.map(user => (
				<Link key={user.userId} to={`users/${user.userId}`}>
					<UserCard
						profilePicture={user.profilePicture}
						fullName={user.fullName}
						email={user.email}
						username={user.username}
						active={user.active}
					/>
				</Link>
			))}
		</div>
		</StyledMainContainer>
	);
};
export default Home;

const getAllUsers = async setUsers => {
	const users = await getAllData();
	setUsers(users);
};
