import { lazy } from 'react';

export { AddCommentFormSchema } from './model/types/addCommentForm';

export default lazy(
  () => import(/* webpackChunkName: "add-comment-form" */ './ui/AddCommentForm/AddCommentForm'),
);
