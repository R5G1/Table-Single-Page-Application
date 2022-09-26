import { useState } from 'react';
import { IArray } from '../../../components/type/type';
import createContentCopy from './createContentCopy';
import FilterArray from './filterArray';
import styles from './style/showArray.module.scss';
interface IShowArray {
  post: IArray[];
}

function ShowArray({ post }: IShowArray) {
  const [state, setState] = useState([]);

  return (
    <table className={styles.ShowArrayContetn}>
      <thead>
        <tr>
          <th>
            <p>userId</p>
          </th>
          <th>
            <p>id</p>
          </th>
          <th>
            <p>Название</p>
          </th>
          <th>
            <p>комментарии</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.ShowArrayContetnUserId}>
            <FilterArray array={createContentCopy(post, 'userId')} useFilter={false} />
          </td>
          <td>
            <FilterArray array={createContentCopy(post, 'id')} />
          </td>
          <td>
            <FilterArray array={createContentCopy(post, 'title')} />
          </td>
          <td>
            <FilterArray array={createContentCopy(post, 'body')} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ShowArray;
