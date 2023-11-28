import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './index.scss'
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
