import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import styles from './gym.module.css';

const GymPage = () => {
  return (
    <>
      <Menu />
      <div className={styles['gym-container']}>
        <h1>GYM</h1>
        <div className={styles['gym-boxes']}>
          <Link to='/gym/push'>
            <div className={styles['gym-box']}>
              <img
                src='/assets/images/push.png'
                alt=''
              />
              <h2>Push</h2>
            </div>
          </Link>
          <Link to='/gym/pull'>
            <div className={styles['gym-box']}>
              <img
                src='/assets/images/pull.png'
                alt=''
              />
              <h2>Pull</h2>
            </div>
          </Link>
          <Link to='/gym/leg'>
            <div className={styles['gym-box']}>
              <img
                src='/assets/images/leg.png'
                alt=''
              />
              <h2>Leg</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GymPage;
