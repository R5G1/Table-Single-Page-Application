import { IArray } from '../../../components/type/type';

function createContent(post: IArray[], type: string) {
  function chengType(item: any) {
    if (type == 'id') return item.id;
    if (type == 'title') return item.title;
    if (type == 'userId') return item.userId;
    if (type == 'body') return item.body;
  }

  const result = post.map((item, index) => {
    return chengType(item);
  });
  return result;
}
export default createContent;
