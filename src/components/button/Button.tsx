import styles from "./Button.module.scss";

interface IButton {
  text: string;
  callback: () => void;
  className: string;
  disabled?: boolean;
  link?: string;
}

const Button = ({ text, callback, className, disabled, link }: IButton) => {
  return (
    <button
      className={`${styles.btn} ${styles[className]} `}
      onClick={callback}
      disabled={disabled}
    >
      <a href={link ? link : "#"}>{text}</a>
    </button>
  );
};

export default Button;
