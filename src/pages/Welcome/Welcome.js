import React from "react";
import styles from "../Welcome/Welcome.module.css";
import welcomeSvg from "../../welcome.svg";

const Welcome = () => {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        <img src={welcomeSvg} className={styles.svg} alt="people eating" />
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
        reprehenderit ullam cupiditate possimus laborum nobis sit corrupti
        quaerat consectetur sapiente, itaque eveniet ratione perspiciatis
        minima.
      </p>

      <button className={[styles["btn-main"], styles.btn].join(" ")}>
        Sign up for Res!
      </button>
    </section>
  );
};

export default Welcome;
