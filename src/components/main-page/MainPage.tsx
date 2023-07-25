import About from "../about/About";
import Boost from "../boost/Boost";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Statistics from "../statistics/Statistics";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <About />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
};

export default MainPage;
