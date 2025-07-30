import { Route, Routes } from 'react-router-dom';
import Login from '../../components/login/Login';
import GymPage from '../../pages/gym/Gym.page';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Login />}
      />
      <Route
        path='/gym'
        element={<GymPage />}
      />
    </Routes>
  );
};

export default Router;
