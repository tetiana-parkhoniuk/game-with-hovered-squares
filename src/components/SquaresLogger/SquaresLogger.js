import propTypes from 'prop-types';
import styles from './SquaresLogger.module.css';

export default function SquaresLogger({ logMessages }) {
  return (
    <>
      <h2 className={styles.loggerTitle}>Hover Squares</h2>
      <ul className={styles.loggerList}>
        {logMessages.map(logMessage => (
          <li key={Math.random()} className={styles.loggerListItem}>
            {logMessage}
          </li>
        ))}
      </ul>
    </>
  );
}

SquaresLogger.propTypes = {
  logMessages: propTypes.array.isRequired,
};
