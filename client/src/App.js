import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import MyRecipe from "./pages/MyRecipe/MyRecipe";
import AuthContext from "./context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      getLoggedUser();
    }, 1000);

    return () => clearTimeout(timer);
  }, [setAuth, setIsLoading]);

  const getLoggedUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/profile",
        {
          credentials: "include",
        }
      );
      const resJson = await response.json();
      if (response.status === 200) {
        setIsLoading(false);
        setAuth(resJson.user);
        setIsLoading(false);
        navigate("/home");
      } else {
        setIsLoading(false);
        navigate("/signin");
      }
    } catch (error) {
      setIsLoading(false);
      navigate("/signin");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loading={isLoading} />}>
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
