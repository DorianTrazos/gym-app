import { Route, Routes } from 'react-router-dom';
import Login from '../../components/login/Login';
import Exercise from '../../pages/exercise/Exercise';
import GymPage from '../../pages/gym/Gym.page';
import Routine from '../../pages/routine/Routine';

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
      <Route
        path='/gym/:routineSelected'
        element={<Routine />}
      />
      <Route
        path='/gym/:routineSelected/:exerciseId'
        element={<Exercise />}
      />
    </Routes>
  );
};

export default Router;
