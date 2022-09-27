import styles from "../Login/Login.module.css";

const Signup = () => {
  return (
    <section className={styles.container}>
      <h1>Sign Up</h1>
      <form action="" className={styles.form}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" name="password-confirm" />
        </div>

        <div>
          <button className={`${styles.btn} ${styles["btn-main"]}`}>
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
