import { lazy } from 'react';

export default lazy(
  () => import(/* webpackChunkName: "articles-page" */ './ui/ArticlesPage/ArticlesPage'),
);
