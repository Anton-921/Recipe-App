import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "../../App.module.css";
import AuthContext from "../../context/AuthProvider";
import Header from "../Header/Header";
import Placeholder from "../Placeholder/Placeholder";
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
