import Card from "../card/Card";
import brandIcon from "../../assets/images/icon-brand-recognition.svg";
import detailedIcon from "../../assets/images/icon-detailed-records.svg";
import fullyIcon from "../../assets/images/icon-fully-customizable.svg";
import styles from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <section className={styles.statistic}>
      <div className={styles.statistic__boxOne}>
        <h2 className={styles.statistic__title}>Advanced Statistics</h2>
        <p className={styles.statistic__text}>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className={styles.statistic__boxTwo}>
        <div className={styles.statistic__cardOne}>
          <Card
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            icon={brandIcon}
          />
        </div>
        <div className={styles.statistic__cardTwo}>
          <Card
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision."
            icon={detailedIcon}
          />
        </div>
        <div className={styles.statistic__cardThree}>
          <Card
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
            icon={fullyIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
