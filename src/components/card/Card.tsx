import styles from "./Card.module.scss";

interface ICard {
  title: string;
  text: string;
  icon: string;
}

const Card = ({ title, text, icon }: ICard) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__iconBox}>
        <img className={styles.card__icon} src={icon} alt="icon" />
      </div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__text}>{text}</p>
    </div>
  );
};

export default Card;
