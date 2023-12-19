import { lazy } from 'react';

export default lazy(() => import(/* webpackChunkName: "profile-page" */ './ui/ProfilePage'));
