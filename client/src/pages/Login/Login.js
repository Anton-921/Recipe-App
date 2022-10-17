import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import styles from "../Login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  console.log(from);
  const handleLogin = async (e) => {
    const loginData = { email, pwd };
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const resJson = response.json()
      if (response.status === 200) {
        console.log('user logged')
        // User logged successfully
        // setAuth({ user: "Yeffry" });
        // navigate(from, { replace: true });
      } else {
        // Set Error
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className={styles.container}>
      <h1>Login</h1>
      <form action="" className={styles.form} onSubmit={handleLogin}>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
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

export default Login;
