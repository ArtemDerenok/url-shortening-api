import styles from "./Hamburger.module.scss";

interface IHamburger {
  handleMenu: () => void;
  isMobile: boolean;
}

const Hamburger = ({ handleMenu, isMobile }: IHamburger) => {
  return (
    <div
      className={`${styles.hamburger} ${
        isMobile ? styles.hamburger_active : null
      }`}
      onClick={handleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
