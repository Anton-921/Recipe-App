import { useState, useContext } from "react";
import styles from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, username }),
        }
      );

      const resJson = await response.json();

      if (response.status === 201) {
        setAuth(resJson.user);
        navigate("/home");
      }
    } catch (error) {
      console.log("catch error");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.login}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup} className={styles.form}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className={styles["form-control"]}>
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" name="password-confirm" />
        </div> */}

          <div>
            <button className={`${styles.btn} ${styles["btn-main"]}`}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
