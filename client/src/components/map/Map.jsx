import phGreen from '../../assets/philippines-solid-green.png';
import phBlue from '../../assets/philippines-solid-blue.png';

import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <img src={phGreen} className={styles.map} />
    </div>
  );
};

export default Map;
