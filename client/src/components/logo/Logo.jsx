import logoUrl from '../../assets/logo.png';
import styles from './Logo.module.css';

import { Link } from 'react-router-dom';

const NAV_IMAGE_SIZE = 60;
const LESSON_IMAGE_SIZE = 100;

function Logo({ lesson }) {
  return (
    <Link to="/" className={styles.logo}>
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
