import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";

const App = () => {
  return (
    <main className={styles.App}>
      <Header /> {/* Constant*/}
      <Feed />
      <Footer /> {/* Constant*/}
    </main>
  );
};

export default App;
