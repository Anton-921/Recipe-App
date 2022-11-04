import React, { useEffect, useState } from "react";
import styles from "../MyRecipe/MyRecipe.module.css";
import Cards from "../../components/Cards/Card";
import { useRecipes } from "../../context/RecipeProvider";
import Spinner from "../../components/Spinner/Spinner";

const MyRecipe = () => {
  const { recipes, setRecipes } = useRecipes();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      setIsLoading(true)
      const response = await fetch(
        "http://localhost:8080/api/v1/recipes/getUserRecipes",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const resJson = await response.json();
      if (response.status === 200) {
        console.log(resJson.recipes);
        setIsLoading(false)
        setRecipes(resJson.recipes);
      }
    };

    fetchUserRecipes();
  }, [setRecipes]);

  return (
    <section className={styles.container}>
      <div className={styles.recipes}>
        <h1>My Recipes</h1>
        {isLoading ? <Spinner /> : <Cards items={recipes} />}
      </div>
    </section>
  );
};

export default MyRecipe;
