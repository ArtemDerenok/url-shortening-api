import List from "../list/List";
import twitterImg from "../../assets/images/icon-twitter.svg";
import pinterImg from "../../assets/images/icon-pinterest.svg";
import instImg from "../../assets/images/icon-instagram.svg";
import facebookImg from "../../assets/images/icon-facebook.svg";
import styles from "./Footer.module.scss";
import Link from "../link/Link";

const links = [
  {
    img: facebookImg,
    src: "https://ru-ru.facebook.com/",
    alt: "facebook",
  },
  {
    img: twitterImg,
    src: "https://twitter.com/?lang=ru",
    alt: "twitter",
  },
  {
    img: pinterImg,
    src: "https://ru.pinterest.com/",
    alt: "pinterest",
  },
  {
    img: instImg,
    src: "https://www.instagram.com/",
    alt: "instagram",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__title}>Shortly</h2>
      <div className={styles.footer__boxOne}>
        <div className={styles.footer__listsBox}>
          <List
            links={["Link Shortering", "Branded Links", "Analytics"]}
            title="Features"
          />
          <List links={["Blog", "Developers", "Support"]} title="Resources" />
          <List
            links={["About", "Our Team", "Careers", "Contact"]}
            title="Company"
          />
        </div>

        <div className={styles.footer__linksBox}>
          {links.map((elem, index) => (
            <Link data={elem} key={index} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
