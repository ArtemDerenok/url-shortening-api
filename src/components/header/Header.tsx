import Button from "../button/Button";
import Menu from "../menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__boxOne}>
        <h2 className={styles.header__title}>Shortly</h2>
        <Menu />
      </div>
      <div className={styles.header__boxTwo}>
        <button className={styles.header__loginBtn}>Login</button>
        <Button text="Sign Up" callback={() => {}} className="btn-header" />
      </div>
    </header>
  );
};

export default Header;
