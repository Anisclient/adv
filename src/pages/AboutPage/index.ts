import { lazy } from 'react';

export default lazy(() => import(/* webpackChunkName: "about-page" */ './ui/AboutPage'));
