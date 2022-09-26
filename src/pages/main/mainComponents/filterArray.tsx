import { useEffect, useMemo, useState } from 'react';
import { IArray } from '../../../components/type/type';
import styles from './style/FilterArray.module.scss';
interface IFilterArray {
  array: number[] | string[];
  useFilter?: boolean;
}
function FilterArray({ array, useFilter = true }: IFilterArray) {
  const [valueSelect, setValueSelect] = useState('up');
  const [valueInput, setValueInput] = useState('');

  function resultSort() {
    if (valueSelect === 'up') {
      const newArray = [...array].sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
      });

      return newArray;
    }
    if (valueSelect === 'down') {
      const newArray = [...array].sort(function (a, b) {
        return a === b ? 0 : a > b ? -1 : 1;
      });

      return newArray;
    } else {
      return [];
    }
  }
  function resultFilter() {
    const newArray = resultSort().filter((item) => {
      return (item.toString().toLowerCase() + '').indexOf(valueInput.toLowerCase()) != -1;
    });
    if (valueInput) {
      return newArray;
    }
    return resultSort();
  }

  return (
    <div className={styles.filterArray}>
      {useFilter ? (
        <>
          <input type="text" onChange={(event) => setValueInput(event.target.value)} />
          <select onChange={(event) => setValueSelect(event.target.value)} value={valueSelect}>
            <option value={'up'}>По возрастанию</option>
            <option value={'down'}>По убыванию</option>
          </select>
        </>
      ) : (
        <div style={{ paddingTop: '80px' }}></div>
      )}

      {resultFilter().map((item, index) => (
        <div key={index} className={styles.conteiner}>
          <div className={styles.contetnText}>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default FilterArray;
