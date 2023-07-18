import styles from './Options.module.css';

function Options({ question, dispatch }) {
  const options = question.options;

  return (
    <ul className={styles.options}>
      {options.map((option, idx) => (
        <li
          key={option._id}
          className={styles.option}
          onClick={() => dispatch({ type: 'clicked', payload: idx })}
        >
          {option.tagalog}
        </li>
      ))}
    </ul>
  );
}

export default Options;
