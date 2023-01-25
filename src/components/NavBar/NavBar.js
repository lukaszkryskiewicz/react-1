import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.icon}>
          <a href="/"><i className='fa fa-tasks'></i></a>
        </div>
        <ul className={styles.list}>
          <li className={styles.listEl}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li className={styles.listEl}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
          <li className={styles.listEl}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;