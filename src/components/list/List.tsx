import styles from "./List.module.scss";

interface IList {
  links: string[];
  title: string;
}

const List = ({ links, title }: IList) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.list__title}>{title}</h3>
      <ul className={styles.list__items}>
        {links.map((elem, index) => (
          <li key={index}>
            <a href="#" className={styles.list__link}>
              {elem}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
