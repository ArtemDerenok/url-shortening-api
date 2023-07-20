import About from "../about/About";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default MainPage;
