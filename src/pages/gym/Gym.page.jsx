import styles from './gym.module.css';

const GymPage = () => {
  return (
    <div className={styles['gym-container']}>
      <h1>GYM</h1>
      <div className={styles['gym-boxes']}>
        <div className={styles['gym-box']}>
          <img
            src='/assets/images/push.png'
            alt=''
          />
          <h2>Push</h2>
        </div>
        <div className={styles['gym-box']}>
          <img
            src='/assets/images/pull.png'
            alt=''
          />
          <h2>Pull</h2>
        </div>
        <div className={styles['gym-box']}>
          <img
            src='/assets/images/leg.png'
            alt=''
          />
          <h2>Leg</h2>
        </div>
      </div>
    </div>
  );
};

export default GymPage;
