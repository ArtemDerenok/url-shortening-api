import Button from "../button/Button";
import styles from "./ShortLinks.module.scss";

interface IShortLink {
  fullLink: string;
  shortLink: string;
}

const ShortLink = ({ fullLink, shortLink }: IShortLink) => {
  return (
    <div className={styles.shortLink}>
      <p className={styles.shortLink__fullLink}>{fullLink}</p>
      <p className={styles.shortLink__shortLink}>{shortLink}</p>
      <Button text="Copy" callback={() => {}} className="" />
    </div>
  );
};

export default ShortLink;
