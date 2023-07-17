import styles from './HowSection.module.css';

function HowSection({ step }) {
  return (
    <div className={styles.how}>
      <div>
        <img />
        <p>Easy as starting a lesson</p>
      </div>

      <div>
        <img />
        <p>and answering questions</p>
      </div>
    </div>
  );
}

export default HowSection;
