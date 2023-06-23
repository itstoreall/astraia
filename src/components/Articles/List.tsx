import { IArticle } from '@/interfaces';
import Link from 'next/link';
import s from './List.module.scss';

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  return (
    <ul className={s.list}>
      {articles?.map((el: IArticle) => {
        return (
          <li key={el.id} className={s.item}>
            <Link className={s.cardLink} href={`/articles/${el.id}`}>
              <div className={s.card}>
                <p>{el.id}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;

// return (
//     <List>
//       {articles?.map((el: any) => {
//         return (
//           <Item key={el.id}>
//             {pathname === '/admin/dashboard/articles' ? (
//               <>
//                 <ArticlePreview el={el} />
//                 {/* <ListItemNav
//                   to={`/admin/dashboard/articles/${el.id}`}
//                   element={'article_list'}
//                 >
//                   <ArticlePreview el={el} />
//                 </ListItemNav> */}
//                 {/* <ListItemNav
//                   to={`/admin/dashboard/articles/${el.id}/edit`}
//                   element={'article_list'}
//                 >
//                   Edit
//                 </ListItemNav>
//                 <ListItemNav
//                   to={`/admin/dashboard/articles/${el.id}/delete`}
//                   element={'article_list'}
//                 >
//                   Delete
//                 </ListItemNav> */}
//               </>
//             ) : (
//               <ListItemNav to={`/articles/${el.id}`} element={'article_list'}>
//                 <ArticlePreview el={el} />
//               </ListItemNav>
//             )}
//           </Item>
//         );
//       })}
//     </List>
//   );
