import React, { useEffect, useState } from "react";
import styles from "../MyRecipe/MyRecipe.module.css";
import Cards from "../../components/Cards/Card";

const MyRecipe = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchUserRecipes()
  }, []);

  const fetchUserRecipes = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/recipes/getUserRecipes",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const resJson = await response.json()
    if (response.status === 200) {
      setRecipes(resJson.recipes)
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.recipes}>
        <h1>My Recipes</h1>
        <Cards items={recipes} />
      </div>
    </section>
  );
};

export default MyRecipe;
