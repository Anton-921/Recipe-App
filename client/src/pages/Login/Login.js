import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import styles from "../Login/Login.module.css";

const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = async (e) => {
    const loginData = { username, password };
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const resJson = await response.json();
      if (response.status === 200) {
        setAuth(resJson.user);
        navigate("/home");
      } else {
        // Set Error
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.login}>
        <h1>Login</h1>
        <form action="" className={styles.form} onSubmit={handleLogin}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>

          <div>
            <button className={`${styles.btn} ${styles["btn-main"]}`}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
