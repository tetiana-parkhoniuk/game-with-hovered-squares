import styles from './SquaresLogger.module.css';

export default function SquaresLogger({ logMessages }) {
  return (
    <>
      <h2>Hover Squares</h2>
      <ul>
        {logMessages.map(
          (logMessage, index) =>
            index < 5 && (
              <li key={'logMessages-' + Math.random() * 123}>{logMessage}</li>
            ),
        )}
      </ul>
    </>
  );
}
