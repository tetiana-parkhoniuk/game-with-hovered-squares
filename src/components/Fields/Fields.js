// import React, { useState } from 'react';
// import styles from './Fields.module.css';

// export default function Fields({ size, onFieldHover }) {
//   const fieldsArray = new Array(size).fill('');
//   const [isHoveredField, setHoveredField] = useState(0);

//   //   const toggleIsHovered = event => {
//   //     if (event) {
//   //       setHoveredField(!isHoveredField);
//   //       console.log(isHoveredField);
//   //     }
//   //   };

//   const toggleIsHovered = ind => {
//     if (ind === isHoveredField) {
//       setHoveredField(null);
//       console.log('isHoveredField1:', isHoveredField);
//     } else {
//       setHoveredField(ind);
//       console.log('isHoveredField2:', isHoveredField);
//     }
//   };

//   const handleMouseLeave = event => {
//     const cell = event.target;
//     if (cell.tagName.toLowerCase() !== 'td') return;
//     const row = cell.parentNode.rowIndex;
//     const col = cell.cellIndex;
//     console.log('row:', { row: row + 1 });
//     console.log('col:', { col: col + 1 });
//     onFieldHover({ row: row + 1, col: col + 1 });
//   };

//   const blue = '#88C5F6';
//   const white = '#fff';

//   return (
//     <table>
//       <tbody>
//         {fieldsArray.map((item, index) => {
//           return (
//             <tr key={'row-' + index}>
//               {fieldsArray.map((it, ind) => {
//                 return (
//                   <td
//                     className={styles.field}
//                     style={
//                       isHoveredField === ind
//                         ? { backgroundColor: blue }
//                         : { backgroundColor: white }
//                     }
//                     key={'col-' + ind}
//                     onMouseEnter={() => toggleIsHovered(ind)}
//                     onMouseLeave={handleMouseLeave}
//                   />
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

import styles from './Fields.module.css';

export default function Fields({ size, onFieldHover }) {
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

  const handleHoveredFields = (event, cell) => {
    if (event.target.style.backgroundColor === 'white') {
      event.target.style.backgroundColor = 'rgb(136, 197, 246)';
    } else {
      event.target.style.backgroundColor = 'white';
    }
    console.log(cell);
    onFieldHover(cell);
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
                    onMouseEnter={e => handleHoveredFields(e, cell)}
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
