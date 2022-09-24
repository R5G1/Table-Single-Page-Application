import styles from './style/createContent.module.scss';

import { IArray } from '../../../components/type/type';

interface ICreateContent {
  post: IArray[];
  type: string;
}
function CreateContent({ post, type }: ICreateContent) {
  function chengType(item: IArray) {
    if (type == 'id') return item.id;
    if (type == 'title') return item.title;
    if (type == 'userId') return item.userId;
    if (type == 'body') return item.body;
  }

  const result = post.map((item, index) => (
    <div key={item.id} className={styles.conteiner}>
      <div className={styles.contetnText}>{chengType(item)}</div>
    </div>
  ));
  return <>{result}</>;
}

export default CreateContent;
