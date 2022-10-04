import React from "react";
import styles from "../MyRecipe/MyRecipe.module.css";
import Cards from "../../components/Cards/Card";

const MyRecipe = () => {
  // When we come to this page through routing
  // Step 1-Grab ID
  // Step 2-On Mount get all recipes from my profile
  // Step 3-Send them down to Recipes component which renders a list of them
  return (
    <section className={styles.container}>
      <div className={styles.recipes}>
        <h1>My Recipes</h1>
        <Cards />
      </div>
    </section>
  );
};

export default MyRecipe;
