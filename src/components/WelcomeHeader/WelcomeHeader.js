import React from "react";
import styles from "../WelcomeHeader/WelcomeHeader.module.css";
import logo from "../../diet.png";
import { Outlet } from "react-router-dom";

const WelcomeHeader = ({ onLogIn }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.layout}>
          <div className={styles.logo}>
            <img src={logo} alt="food logo" />
          </div>

          <div className={styles["btn-container"]}>
            <button
              className={[styles["btn-main"], styles.btn].join(" ")}
              onClick={() => onLogIn()}
            >
              Login
            </button>
            <button className={[styles["btn-minor"], styles.btn].join(" ")}>
              Sign-up
            </button>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default WelcomeHeader;
