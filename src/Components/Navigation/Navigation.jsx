import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/"
      >
        Phonebook
      </NavLink>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  )
}
