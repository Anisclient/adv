import { lazy } from 'react'

export default lazy(() => import(/*webpackChunkName: "main-page"*/ './MainPage'))
