import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.icon}>
          <a href="/"><i className='fa fa-tasks'></i></a>
        </div>
        <ul className={styles.list}>
          <li className={styles.listEl}><a href="/">Home</a></li>
          <li className={styles.listEl}><a href="/favorite">Favorite</a></li>
          <li className={styles.listEl}><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;