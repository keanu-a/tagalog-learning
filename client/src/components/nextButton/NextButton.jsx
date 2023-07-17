import styles from './NextButton.module.css';

function NextButton({ text, dispatch, dispatchType }) {
  return (
    <button
      onClick={() => dispatch({ type: dispatchType })}
      className={styles.btn}
    >
      {text}
    </button>
  );
}

export default NextButton;
