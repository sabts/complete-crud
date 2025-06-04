import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from '../components/pages/home/Home';
import UserProfile from '../components/pages/user-profile/UserProfile';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route index element={<Home />} />
				<Route path='/users/:id' element={<UserProfile />} />
			</Routes>
		</>
	);
};

export default Router;
