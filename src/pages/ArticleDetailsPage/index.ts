import { lazy } from 'react';

export default lazy(
  () => import(
    /* webpackChunkName: "article-details-page" */ './ui/ArticleDetailsPage/ArticleDetailsPage'
  ),
);

export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
