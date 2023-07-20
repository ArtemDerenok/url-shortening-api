import styles from "./Link.module.scss";

interface ILink {
  data: {
    img: string;
    src: string;
    alt: string;
  };
}

const Link = ({ data }: ILink) => {
  return (
    <a href={data.src} className={styles.link}>
      <img src={data.img} alt={data.alt} />
    </a>
  );
};

export default Link;
