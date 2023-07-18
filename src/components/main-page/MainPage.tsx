import About from "../about/About";
import Header from "../header/Header";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <About />
    </div>
  );
};

export default MainPage;
