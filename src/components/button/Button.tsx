import styles from "./Button.module.scss";

interface IButton {
  text: string;
  callback: () => void;
  className: string;
}

const Button = ({ text, callback, className }: IButton) => {
  return (
    <button
      className={`${styles.btn} ${styles[className]} `}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default Button;
