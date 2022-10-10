import React, { useEffect, useState } from "react";
import styles from "../Feed/Feed.module.css";
import Cards from "../../components/Cards/Card";
import { useRecipes } from "../../context/RecipeProvider";

const Feed = () => {
  const { recipes, setRecipes } = useRecipes();

  useEffect(() => {
    fetch("http://localhost:8080/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, [setRecipes]);

  return (
    <section className={styles.container}>
      <div className={styles.feed}>
        <h1>Recipes Feed</h1>
        {recipes ? <Cards items={recipes} /> : <p>Loading</p>}
      </div>
    </section>
  );
};

export default Feed;
