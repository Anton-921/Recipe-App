import { useState } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <main className={styles.App}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomeHeader onLogIn={logIn} />}>
            <Route index element={<Welcome />} />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* Protected Routes */}
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
