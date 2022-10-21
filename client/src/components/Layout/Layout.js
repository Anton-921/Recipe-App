import { Outlet } from "react-router-dom";
import styles from "../../App.module.css";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";

const Layout = ({ loading }) => {
  return (
    <main className={styles.App}>
      {!loading ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Layout;
