import Navigation from '../Navigation/Navigation'
import styles from './AppBar.module.css'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  )
}
