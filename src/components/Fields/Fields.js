import React, { useState } from 'react';
import styles from './Fields.module.css';

export default function Fields({ size }) {
  const fieldsArray = new Array(size).fill('');
  const [isHoveredField, setHoveredField] = useState(false);

  //   const toggleIsHovered = event => {
  //     if (event) {
  //       setHoveredField(!isHoveredField);
  //       console.log(isHoveredField);
  //     }
  //   };

  const toggleIsHovered = ind => {
    if (ind === isHoveredField) {
      setHoveredField(null);
      //   console.log(isHoveredField);
    } else {
      setHoveredField(ind);
      //   console.log(isHoveredField);
    }
  };

  const handleMouseLeave = event => {
    const cell = event.target;
    if (cell.tagName.toLowerCase() !== 'td') return;
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;
    // console.log('cell:', cell.tagName);
    console.log('row:', { row: row + 1 });
    console.log('col:', { col: col + 1 });
  };

  const blue = '#000';
  const white = '#fff';

  return (
    <table>
      <tbody>
        {fieldsArray.map((row, index) => {
          return (
            <tr key={row + '-' + index}>
              {fieldsArray.map((col, ind) => {
                return (
                  <td
                    className={styles.field}
                    style={
                      isHoveredField === ind
                        ? { backgroundColor: blue }
                        : { backgroundColor: white }
                    }
                    key={col + '-' + ind}
                    onMouseEnter={() => toggleIsHovered(ind)}
                    onMouseLeave={handleMouseLeave}
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
