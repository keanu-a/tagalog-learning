import phGreen from '../../assets/philippines-solid-green.png';
import phBlue from '../../assets/philippines-solid-blue.png';

import styles from './Map.module.css';

const Map = ({ picture }) => {
  return (
    <div className={styles.mapContainer}>
      <img src={picture} className={styles.map} />
    </div>
  );
};

export default Map;
