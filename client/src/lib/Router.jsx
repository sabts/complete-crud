import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from '../pages/home/Home';
import UserProfile from '../pages/user-profile/UserProfile'; 

const Router = () => {
	return (
		<>
	<Routes>
	<Route path='/' element={<Layout />}>
		<Route index element={<Home />} />
		<Route path='users/:id' element={<UserProfile />} />
	</Route>
</Routes>
		</>
	);
};

export default Router;