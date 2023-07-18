import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__listItem}>
          <a href="#">Features</a>
        </li>
        <li className={styles.menu__listItem}>
          <a href="#">Pricing</a>
        </li>
        <li className={styles.menu__listItem}>
          <a href="#">Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
