import styles from './SquaresLogger.module.css';

export default function SquaresLogger({ logMessages }) {
  return (
    <>
      <h2 className={styles.loggerTitle}>Hover Squares</h2>
      <ul className={styles.loggerList}>
        {logMessages.map(
          (logMessage, index) =>
            index < 7 && (
              <li
                key={'logMessages-' + Math.random() * 123}
                className={styles.loggerListItem}
              >
                {logMessage}
              </li>
            ),
        )}
      </ul>
    </>
  );
}
