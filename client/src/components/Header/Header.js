import React, { useState } from "react";
import logo from "../../diet.png";
import styles from "../Header/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { auth } = useAuth();
  const [checked, setChecked] = useState(false);
  console.log(auth);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {auth.user ? (
          <>
            <input
              type="checkbox"
              id="nav__checkbox"
              className={styles["nav__checkbox"]}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="nav__checkbox" className={styles["nav__toggle"]}>
              <AiOutlineMenu className={styles.menu} size={35} />
              <MdOutlineClose className={styles.close} size={35} />
            </label>

            <ul className={styles["nav__menu"]}>
              <li>
                <img src={logo} className={styles.logo} alt="food logo" />
              </li>

              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/addrecipe">Add Recipe</NavLink>
              </li>
              <li>
                <NavLink to="/myrecipe">My Recipes</NavLink>
              </li>
              <li>
                <FaUserCircle size={35} color="salmon" />
                <button className={[styles["btn-main"], styles.btn].join(" ")}>
                  Logout
                </button>
              </li>
            </ul>
          </>
        ) : (
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
        )}
      </nav>
    </header>
  );
};

export default Header;

// Icon always displayed
// User signed in? Display hamburger menu
// User is not signed in? Display Button menu
