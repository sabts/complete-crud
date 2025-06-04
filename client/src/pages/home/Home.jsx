import {  useEffect, useState } from "react";
import { getAllData } from "../../lib/utils/api";
import UserCard from "../../components/user-card/userCard";
import { Link } from "react-router";

const Home = () => {
const [users, setUsers] = useState([])

useEffect(()=> {getAllUsers(setUsers)}, [])
	return <div>
	{users.map(user => (
		<Link key={user.userId} to={`users/${user.userId}`}
		state={{ user}}>
		<UserCard
			profilePicture = {user.profilePicture}
			fullName={user.fullName}
			email={user.email}
			username={user.username}
			active={user.active}
		/>
		</Link>
	))}
</div>
};
export default Home;

const getAllUsers = async setUsers => {
	const users = await getAllData();
	setUsers(users)
}