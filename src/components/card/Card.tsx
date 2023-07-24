import styles from "./Card.module.scss";

interface ICard {
  title: string;
  text: string;
  icon: string;
}

const Card = ({ title, text, icon }: ICard) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="icon" />
      <h3 className={styles.card__title}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
