import { useNavigate } from 'react-router-dom';
import styles from './back.module.css';

const Back = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1); // -1 significa "una página atrás"

  return (
    <img
      src='/assets/icons/back.svg'
      className={styles['back-button']}
      onClick={handleClick}
    />
  );
};

export default Back;
