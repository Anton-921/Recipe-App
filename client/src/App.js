import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import { Routes, Route, useNavigate } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import MyRecipe from "./pages/MyRecipe/MyRecipe";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthProvider";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getLoggedUser();
  }, [setAuth]);

  const getLoggedUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/profile",
        {
          credentials: "include",
        }
      );
      const resJson = await response.json();
      setAuth(resJson.user);
      navigate("/home");
    } catch (error) {
      navigate("/signin");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout isLoading={isLoading}/>}>
        {/* Public Routes */}
        <Route index element={<Welcome />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="home" element={<Feed />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          <Route path="myrecipe" element={<MyRecipe />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
