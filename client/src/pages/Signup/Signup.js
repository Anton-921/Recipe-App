import { useState } from "react";
import styles from "../Login/Login.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = {
      email,
      pwd,
    };

    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <section className={styles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} className={styles.form}>
        {/* <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div> */}

        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        {/* <div className={styles["form-control"]}>
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" name="password-confirm" />
        </div> */}

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
