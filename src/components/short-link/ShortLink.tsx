import Button from "../button/Button";
import styles from "./ShortLinks.module.scss";

interface IShortLink {
  fullLink: string;
  shortLink: string;
  buffer: string;
  handleBuffer: (value: string) => void;
}

const ShortLink = ({
  fullLink,
  shortLink,
  buffer,
  handleBuffer,
}: IShortLink) => {
  return (
    <div className={styles.shortLink}>
      <div className={styles.shortLink__boxOne}>
        <p className={styles.shortLink__fullLink}>{fullLink}</p>
        <p className={styles.shortLink__shortLink}>{shortLink}</p>
      </div>
      <Button
        text={buffer === shortLink ? "Copied!" : "Copy"}
        callback={() => handleBuffer(shortLink)}
        className={buffer === shortLink ? "btn-copied" : "btn-copy"}
        disabled={buffer === shortLink ? true : false}
      />
    </div>
  );
};

export default ShortLink;
