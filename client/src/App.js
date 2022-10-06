import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Feed from "./pages/Feed/Feed";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import MyRecipe from "./pages/MyRecipe/MyRecipe";
import { useState } from "react";
import oatmeal from "./oatmeal.jpg";

const items = [
  {
    id: 1,
    image: oatmeal,
    name: "Chai Oatmeal",
    type: "Breakfast",
    time: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id: 2,
    image: oatmeal,
    name: "Chai Oatmeal",
    type: "Breakfast",
    time: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description: "Lorem ipsum, a ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },

  {
    id: 3,
    image: oatmeal,
    name: "Chai Oatmeal",
    type: "Breakfast",
    time: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sitctetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id: 4,
    image: oatmeal,
    name: "Chai Oatmeal",
    type: "Breakfast",
    time: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id: 5,
    image: oatmeal,
    name: "Chai Oatmeal",
    type: "Breakfast",
    time: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet conse pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coria, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
];
const App = () => {
  const [recipes, setRecipes] = useState(items);

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
            <Route path="home" element={<Feed recipes={recipes} />} />
            <Route
              path="addrecipe"
              element={<AddRecipe setRecipes={setRecipes} recipes={recipes} />}
            />
            <Route path="myrecipe" element={<MyRecipe />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </main>
  );
};

export default App;
