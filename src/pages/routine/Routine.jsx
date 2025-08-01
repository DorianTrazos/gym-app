import { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Back from '../../components/back/Back';
import { ROUTINE } from '../../lib/constants/routine';
import { AuthContext } from '../../lib/contexts/Auth.context';
import styles from './routine.module.css';

const Routine = () => {
  const { routineSelected } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  // const { routine } = getLocalStorageData(user?.uid);

  // if (!routine) return;

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Routine {routineSelected}</h1>
      <Back />
      <div className={styles['routine-container']}>
        {ROUTINE[routineSelected].map(exercise => (
          <div
            key={exercise.name}
            onClick={() => navigate(`${location.pathname}/${exercise.id}`)}
          >
            <p>{exercise.name}</p>
            <img
              src={exercise.gif}
              alt=''
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Routine;
