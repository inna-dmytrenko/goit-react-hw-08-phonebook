import { useSelector } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import styles from './AppBar.module.css'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'
import { authSelectors } from '../../redux/auth'



export const AppBar = () => {
  
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}
