import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import MyRecipe from "./pages/MyRecipe/MyRecipe";

const App = () => {
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
            <Route path="home" element={<Feed />} />
            <Route path="addrecipe" element={<AddRecipe />} />
            <Route path="myrecipe" element={<MyRecipe />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </main>
  );
};

export default App;
