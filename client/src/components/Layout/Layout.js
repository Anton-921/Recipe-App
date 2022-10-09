import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styles from "../../App.module.css";
import AuthContext from "../../context/AuthProvider";
import Header from "../Header/Header";

const Layout = () => {
  const { auth } = useContext(AuthContext);
  return (
    <main className={styles.App}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;