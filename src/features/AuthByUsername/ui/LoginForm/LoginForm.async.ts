import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export default lazy<FC<LoginFormProps>>(
  () => import(/* webpackChunkName: "login-form" */ './LoginForm'),
);
