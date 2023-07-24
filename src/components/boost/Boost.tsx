import Button from "../button/Button";
import bgImg from "../../assets/images/bg-boost-desktop.svg";
import styles from "./Boost.module.scss";

const Boost = () => {
  return (
    <section className={styles.boost}>
      <div className={styles.boost__container}>
        <h2 className={styles.boost__title}>Boost your links today</h2>
        <Button text="Get Started" callback={() => {}} className="btn-about" />
      </div>
      <img className={styles.boost__img} src={bgImg} alt="background" />
    </section>
  );
};

export default Boost;
