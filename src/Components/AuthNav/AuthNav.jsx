import { NavLink } from 'react-router-dom'
import styles from './AuthNav.module.css'
export default function Navigation() {
  return (
    <div className={styles.authNav}>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/login"
      >
        Log In
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/register"
      >
        Sign Up
      </NavLink>
      
     
    </div>
  )
}
