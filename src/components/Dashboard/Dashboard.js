import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
import logo from "../../diet.png";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.layout}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="food logo" />
            </Link>
          </div>

          <div className={styles["btn-container"]}>
            <Link to="/signin">
              <button className={[styles["btn-main"], styles.btn].join(" ")}>
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className={[styles["btn-minor"], styles.btn].join(" ")}>
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
