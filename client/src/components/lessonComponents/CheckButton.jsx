function CheckButton({ dispatch, selectedOption }) {
  const CHECK_DISPATCH_TYPE = { type: 'check' };

  return (
    <button
      onClick={() => dispatch(CHECK_DISPATCH_TYPE)}
      className={selectedOption === null ? 'disabled' : ''}
    >
      Check
    </button>
  );
}

export default CheckButton;
