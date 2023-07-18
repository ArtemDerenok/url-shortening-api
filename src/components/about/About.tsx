import Button from "../button/Button";
import styles from "./About.module.scss";
import image from "../../assets/images/illustration-working.svg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__boxOne}>
        <h1 className={styles.about__title}>
          More than just <br /> shorter links
        </h1>
        <p className={styles.about__text}>
          Build your brand's recognition and get detailed <br /> insights on how
          your links are performing.
        </p>
        <Button text="Get Started" callback={() => {}} className="btn-about" />
      </div>
      <div className={styles.about__boxTwo}>
        <img src={image} alt="working" className={styles.about__img} />
      </div>
    </section>
  );
};

export default About;
