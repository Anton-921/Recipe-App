import React, { useState } from "react";
import logo from "../../diet.png";
import styles from "../Header/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [user, setUser] = useState("Yeffry");
  return (
    <header className={styles.header}>
      {/* Website Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="food logo" />
      </div>

      {/* If user is not signed in shows buttons*/}
      {!user && (
        <div className={styles["btn-container"]}>
          <button className={[styles["btn-main"], styles.btn].join(" ")}>
            Login
          </button>
          <button className={[styles["btn-minor"], styles.btn].join(" ")}>
            Sign-up
          </button>
        </div>
      )}
      {/* If user is signed in then show hamburger icon */}
      {user && (
        <div className={styles.hamburger}>
          <AiOutlineMenu size={30} />
        </div>
      )}
    </header>
  );
};

export default Header;
