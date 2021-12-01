import propTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ text, onClick, isDisabled }) {
  return (
    <button className={styles.startBtn} onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
};
