import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a href="">Home</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="">Add Movie</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="">Popular</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="">Now Playing</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="">Top Rated</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
