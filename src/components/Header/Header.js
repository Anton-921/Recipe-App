import React, { useState } from "react";
import logo from "../../diet.png";
import styles from "../Header/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("Yeffry");
  const [checked, setChecked] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
            <NavLink href="#">
              <img src={logo} className={styles.logo} alt="" />
            </NavLink>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// Icon always displayed
// User signed in? Display hamburger menu
// User is not signed in? Display Button menu
