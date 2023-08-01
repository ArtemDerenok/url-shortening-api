import { useState } from "react";
import Button from "../button/Button";
import Hamburger from "../hamburger/Hamburger";
import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMobile, setMobile] = useState(false);

  const handleMobileMode = () => {
    setMobile((prev) => !prev);
  };

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
      <MobileMenu isMobile={isMobile} handleMenu={handleMobileMode} />
      <Hamburger handleMenu={handleMobileMode} isMobile={isMobile} />
    </header>
  );
};

export default Header;
