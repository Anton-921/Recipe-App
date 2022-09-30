import { useState, useContext } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
import useAuth from "./hooks/useAuth";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    // <main className={styles.App}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Welcome />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Feed />} />
          </Route>
        </Route> 
      </Routes>
    </BrowserRouter>
    // </main>
  );
};

export default App;
