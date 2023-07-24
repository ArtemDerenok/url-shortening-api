import Button from "../button/Button";
import bgImg from "../../assets/images/bg-shorten-desktop.svg";
import styles from "./ShortBar.module.scss";

const ShortBar = () => {
  return (
    <section className={styles.bar}>
      <form className={styles.bar__form}>
        <input
          className={styles.bar__input}
          type="text"
          name="link"
          id="link"
          placeholder="Shorten a link here..."
        />
        <Button text="Shorten it!" callback={() => {}} className="btn-short" />
      </form>
      <img className={styles.bar__img} src={bgImg} alt="background" />
    </section>
  );
};

export default ShortBar;
