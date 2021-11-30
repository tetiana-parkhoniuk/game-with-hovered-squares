import styles from './GameField.module.css';

export default function GameField({ size, onCellHover }) {
  if (!size) {
    return null;
  }
  let gameField = new Array(size);
  for (let i = 0; i < size; i++) {
    gameField[i] = new Array(size);
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      gameField[i][j] = `row ${i + 1} col ${j + 1}`;
    }
  }

  const handleHoveredCell = (event, cell) => {
    if (event.target.style.backgroundColor === 'white') {
      event.target.style.backgroundColor = 'rgb(136, 197, 246)';
    } else {
      event.target.style.backgroundColor = 'white';
    }
    onCellHover(cell);
  };

  return (
    <table>
      <tbody>
        {gameField.map(row => {
          return (
            <tr key={Math.random()}>
              {row.map(cell => {
                return (
                  <td
                    className={styles.field}
                    style={{ backgroundColor: 'white' }}
                    key={Math.random()}
                    onMouseEnter={e => handleHoveredCell(e, cell)}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
