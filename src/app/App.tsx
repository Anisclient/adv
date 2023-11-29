import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  )
}

export default App
