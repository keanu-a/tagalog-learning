import logoUrl from '../../assets/logo.png';
import styles from './Logo.module.css';

import { Link, useNavigate } from 'react-router-dom';

const NAV_IMAGE_SIZE = 60;
const LESSON_IMAGE_SIZE = 100;

function Logo({ lesson }) {
  const navigate = useNavigate();

  // This function is only for logos in a lesson
  // It prompts the user if they want to go back home
  const handleOnClick = (e) => {
    if (lesson) {
      e.preventDefault();
      const confirm = window.confirm(
        'Are you sure you want to go back to the home page?'
      );

      if (confirm) navigate('/');
    }
  };

  return (
    <Link to="/" className={styles.logo} onClick={handleOnClick}>
      <img
        alt="Tagalog Learning Logo"
        height={lesson ? LESSON_IMAGE_SIZE : NAV_IMAGE_SIZE}
        width={lesson ? LESSON_IMAGE_SIZE : NAV_IMAGE_SIZE}
        src={logoUrl}
      />
      <div className={lesson && styles.lessonLogo}>TagalogLearning.com</div>
    </Link>
  );
}

export default Logo;
