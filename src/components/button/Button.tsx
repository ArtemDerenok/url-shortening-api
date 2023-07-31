import styles from "./Button.module.scss";

interface IButton {
  text: string;
  callback: () => void;
  className: string;
  disabled?: boolean;
}

const Button = ({ text, callback, className, disabled }: IButton) => {
  return (
    <button
      className={`${styles.btn} ${styles[className]} `}
      onClick={callback}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
