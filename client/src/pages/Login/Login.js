import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import styles from "../Login/Login.module.css";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  console.log(from)
  const handleLogin = () => {
    setAuth({ user: "Yeffry" });
    navigate(from, { replace: true });
  };

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
          <button
            className={`${styles.btn} ${styles["btn-main"]}`}
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
