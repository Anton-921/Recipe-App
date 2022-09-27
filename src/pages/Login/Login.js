import React from "react";
import styles from '../Login/Login.module.css'

const Login = () => {
  return (
    <section className={styles.container}>
      <h1>Login</h1>
      <form action="" className={styles.form}>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>

        <div>
          <button className={`${styles.btn} ${styles['btn-main']}`}>Sign In</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
