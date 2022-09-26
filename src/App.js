import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={styles.App}>
      <Header /> {/* Constant*/}
      <Welcome />          {/* Dynamyc */}
      <Footer /> {/* Constant*/}
    </div>
  );
};

export default App;
