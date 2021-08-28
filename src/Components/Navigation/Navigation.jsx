import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import contactsSelectors from '../../redux/contacts/contacts-selectors'
export default function Navigation() {
  const isLoggedIn=useSelector(contactsSelectors.getLoggedIn)
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
      {isLoggedIn&&  <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/contacts"
      >
        Contacts
      </NavLink>}
      
    </nav>
  )
}
