import styles from "./MobileMenu.module.scss";

interface IMobileMenu {
  isMobile: boolean;
  handleMenu: () => void;
}

const MobileMenu = ({ isMobile, handleMenu }: IMobileMenu) => {
  return (
    <div
      onClick={handleMenu}
      className={`${styles.menu} ${isMobile ? styles.active : null}`}
    >
      <nav className={styles.menu__boxOne}>
        <ul className={styles.menu__listOne}>
          <li className={styles.menu__link}>
            <a href="#">Features</a>
          </li>
          <li className={styles.menu__link}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles.menu__link}>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul className={styles.menu__listTwo}>
          <li className={styles.menu__link}>
            <a href="#">Login</a>
          </li>
          <li className={`${styles.menu__link} ${styles.menu__signLink}`}>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
